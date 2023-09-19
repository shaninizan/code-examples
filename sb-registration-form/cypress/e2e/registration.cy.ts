describe('registration', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  const validEmailPass = () => {
    cy.findByLabelText('Enter your email address:')
      .click()
      .type('test@test.com');
    cy.findByLabelText('Create a password:').click().type('ABC@123!');
    cy.findByRole('button', { name: 'Continue' }).click();
  };

  it('should display only email and password fields on load', () => {
    cy.findByLabelText('Enter your email address:');
    cy.findByLabelText('Create a password:');
    cy.findByRole('button', { name: 'Continue' }).should('be.disabled');

    cy.findByLabelText('First Name:').should('not.exist');
    cy.findByLabelText('Last Name:').should('not.exist');
    cy.findByLabelText('Enter Address (optional):').should('not.exist');
    cy.findByLabelText('Street:').should('not.exist');
    cy.findByLabelText('City:').should('not.exist');
    cy.findByLabelText('State:').should('not.exist');
    cy.findByLabelText('Zip:').should('not.exist');
    cy.findByRole('button', { name: 'Complete Registration' }).should(
      'not.exist'
    );
  });

  it('should validate email', () => {
    cy.findByLabelText('Enter your email address:').click().type('test');
    cy.findByLabelText('Create a password:').click().type('ABC@123!');
    cy.findByRole('button', { name: 'Continue' }).click();

    cy.findByLabelText('Enter your email address:')
      .invoke('prop', 'validationMessage')
      .should(
        'equal',
        `Please include an '@' in the email address. 'test' is missing an '@'.`
      );
  });

  it('should validate password', () => {
    cy.findByLabelText('Enter your email address:')
      .click()
      .type('test@test.com');
    cy.findByLabelText('Create a password:').click().type('ABC');

    cy.findByText('The password must be 8 characters.')
      .parent()
      .should('have.class', 'invalid');
    cy.findByText('The password must contain at least one number.')
      .parent()
      .should('have.class', 'invalid');
    cy.findByText('The password must contain at least one special character.')
      .parent()
      .should('have.class', 'invalid');

    cy.findByRole('button', { name: 'Continue' }).should('be.disabled');

    cy.findByLabelText('Create a password:').click().type('@123!');
    cy.findByText('The password must be 8 characters.')
      .parent()
      .should('have.class', 'valid');
    cy.findByText('The password must contain at least one number.')
      .parent()
      .should('have.class', 'valid');
    cy.findByText('The password must contain at least one special character.')
      .parent()
      .should('have.class', 'valid');

    cy.findByRole('button', { name: 'Continue' }).should('not.be.disabled');
  });

  it('should continue with valid email and password', () => {
    cy.findByRole('button', { name: 'Continue' }).should('be.disabled');
    validEmailPass();

    cy.findByLabelText('Enter your email address:').should('not.exist');
    cy.findByLabelText('Create a password:').should('not.exist');
    cy.findByRole('button', { name: 'Continue' }).should('not.exist');

    cy.findByLabelText('First name:');
    cy.findByLabelText('Last name:');
    cy.findByLabelText('Enter Address (optional):').should('not.be.checked');
  });

  it('should accept registration without address', () => {
    validEmailPass();

    cy.findByLabelText('First name:').click().type('Shani');
    cy.findByLabelText('Last name:').click().type('Brown');

    cy.findByRole('button', { name: 'Complete Registration' }).click();

    cy.wait(500);

    cy.findByText('Response:');
  });

  // NOTE: with a more robust address component, this would be tested in a separate file
  it('should validate address fields', () => {
    validEmailPass();
    cy.findByLabelText('First name:').click().type('Shani');
    cy.findByLabelText('Last name:').click().type('Brown');
    cy.findByLabelText('Enter Address (optional):').click();

    cy.findByLabelText('Enter Address (optional):').should('be.checked');

    cy.findByRole('button', { name: 'Complete Registration' }).click();

    cy.findByLabelText('Street:')
      .invoke('prop', 'validationMessage')
      .should('equal', 'Please fill out this field.');
  });

  it('should accept registration with address', () => {
    validEmailPass();
    cy.findByLabelText('First name:').click().type('Shani');
    cy.findByLabelText('Last name:').click().type('Brown');
    cy.findByLabelText('Enter Address (optional):').click();

    cy.findByLabelText('Street:').type('123 Main Street');
    cy.findByLabelText('City:').type('Marietta');
    cy.findByLabelText('State:').type('Georgia');
    cy.findByLabelText('Zip:').type('30062');

    cy.findByRole('button', { name: 'Complete Registration' }).click();

    cy.wait(500);

    cy.findByText('Response:');
  });
});
