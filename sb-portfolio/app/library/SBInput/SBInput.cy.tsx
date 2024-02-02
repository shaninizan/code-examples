import React from 'react';
import { SBInput } from './SBInput';

describe('<SBInput />', () => {
  beforeEach(() => {
    const mockSpy = cy.spy().as('mockSpy');
    cy.mount(
      <SBInput labelText="Input label" name="input" onChange={mockSpy} />
    );
  });

  it('renders', () => {
    cy.get('label').should('have.text', 'Input label: ');
    cy.get('input').should('have.attr', 'name').and('equal', 'input');
    cy.get('input').should('have.attr', 'type').and('equal', 'text');
  });

  it('accepts text input after label is clicked', () => {
    cy.get('label').click().type('Shani');
    cy.get('input').should('have.value', 'Shani');
    cy.get('@mockSpy').should('have.been.called');
  });

  it('accepts text input after input is clicked', () => {
    cy.get('input').click().type('Br0wn');
    cy.get('input').should('have.value', 'Br0wn');
    cy.get('@mockSpy').should('have.been.called');
  });
});
