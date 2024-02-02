import React from 'react';
import { SBCheckbox } from './SBCheckbox';

describe('<SBCheckbox />', () => {
  beforeEach(() => {
    const mockSpy = cy.spy().as('mockSpy');
    cy.mount(
      <SBCheckbox
        labelText="Checkbox label"
        name="checkbox"
        onChange={mockSpy}
      />
    );
  });

  it('renders', () => {
    cy.get('label').should('have.text', 'Checkbox label');
    cy.get('input').should('have.attr', 'name').and('equal', 'checkbox');
    cy.get('input').should('have.attr', 'type').and('equal', 'checkbox');
    cy.get('input').should('not.be.checked');
    cy.get('input').should('not.be.disabled');
  });

  it('can render checked', () => {
    const mockSpy = cy.stub();
    cy.mount(
      <SBCheckbox
        defaultChecked
        labelText="Checkbox label"
        name="checkbox"
        onChange={mockSpy}
      />
    );

    cy.get('input').should('be.checked');
  });

  it('will be checked on clicking checkbox', () => {
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
