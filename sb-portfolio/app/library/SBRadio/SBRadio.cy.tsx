import React from 'react';
import { SBRadio } from './SBRadio';

describe('<SBRadio />', () => {
  beforeEach(() => {
    const mockSpy = cy.spy().as('mockSpy');
    cy.mount(
      <SBRadio labelText="Radio label" name="radio" onChange={mockSpy} />
    );
  });

  it('renders', () => {
    cy.get('label').should('have.text', 'Radio label');
    cy.get('input').should('have.attr', 'name').and('equal', 'radio');
    cy.get('input').should('have.attr', 'type').and('equal', 'radio');
    cy.get('input').should('not.be.checked');
    cy.get('input').should('not.be.disabled');
  });

  it('can render checked', () => {
    const mockSpy = cy.stub();
    cy.mount(
      <SBRadio
        defaultChecked
        labelText="Radio label"
        name="radio"
        onChange={mockSpy}
      />
    );

    cy.get('input').should('be.checked');
  });

  it('accepts a value', () => {
    const mockSpy = cy.stub();
    cy.mount(
      <SBRadio
        labelText="Radio label"
        name="radio"
        onChange={mockSpy}
        value="Shani"
      />
    );

  });

  it('will be checked on clicking radio', () => {
    cy.get('input').should('not.be.checked');
    cy.get('input').click();
    cy.get('input').should('be.checked');
    cy.get('@mockSpy').should('have.been.called');
  });

  it('will be checked on clicking label', () => {
    cy.get('input').should('not.be.checked');
    cy.get('label').click();
    cy.get('input').should('be.checked');
    cy.get('@mockSpy').should('have.been.called');
  });
});
