import React from 'react';
import { Input } from './Input';

describe('<Input />', () => {
  it('should render', () => {
    cy.mount(
      <Input
        label="Input label"
        name="textinput"
        placeholder="Placeholder text"
        type="text"
      />
    );

    cy.findByLabelText('Input label:')
      .should('have.attr', 'aria-label')
      .and('equal', 'Input label');
    cy.findByLabelText('Input label:')
      .parent()
      .should('have.attr', 'for')
      .and('equal', 'textinput');
    cy.findByPlaceholderText('Placeholder text');
  });

  it('should accept a value', () => {
    cy.mount(
      <Input label="Input label" name="textinput" type="text" value="ABC123" />
    );

    cy.findByLabelText('Input label:').should('have.value', 'ABC123');
  });

  it('should render a checkbox', () => {
    cy.mount(<Input label="Checkbox" name="checkbox" type="checkbox" />);

    cy.findByLabelText('Checkbox:').should('not.be.checked');
  });

  it('should render a number input', () => {
    cy.mount(<Input label="Number" name="number" type="number" />);

    cy.findByLabelText('Number').click().type('abc');
    cy.findByLabelText('Number').should('not.have.value');
    cy.findByLabelText('Number').click().type('12');
    cy.findByLabelText('Number').should('have.value', 12);
  });

  it('should check if it is not required', () => {
    cy.mount(
      <Input
        label="Input label"
        name="textinput"
        required={false}
        type="text"
      />
    );

    cy.findByText('(optional)');
  });
});
