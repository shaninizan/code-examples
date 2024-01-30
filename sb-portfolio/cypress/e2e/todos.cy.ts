describe('forecast example page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users/1/todos', {
      fixture: 'todos/todos',
    }).as('getTodos');

    cy.visit('localhost:3000/examples/todolist');
  });

  it('loads', () => {
    cy.get('title').should('have.text', 'Shani Brown');
    cy.get('h1').should('have.text', 'Shani Brown');
    cy.get('h2').should('have.text', 'Lead Front End Software Engineer');

    cy.get('h3').should('have.text', 'To Do List');
    cy.get('label').contains('delectus aut autem');
    cy.get('label').should('have.lengthOf', 10);
  });

  it('checks off a done item', () => {
    cy.get('label')
      .contains('delectus aut autem')
      .parent()
      .should('have.class', 'todo');
    cy.get('label')
      .contains('delectus aut autem')
      .parent()
      .should('not.have.class', 'completed');

    cy.get('label').contains('delectus aut autem').click();
    cy.get('label')
      .contains('delectus aut autem')
      .parent()
      .should('have.class', 'completed');
  });
});
