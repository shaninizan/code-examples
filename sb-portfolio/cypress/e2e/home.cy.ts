describe('home page', () => {
  it('loads', () => {
    cy.visit('localhost:3000/');

    cy.get('title').should('have.text', 'Shani Brown');
    cy.get('h1').should('have.text', 'Shani Brown');
    cy.get('h2').should('have.text', 'Lead Front End Software Engineer');
    cy.get('h3').should('have.lengthOf', 2);
  });
});
