import React from 'react';
import { Button } from './Button';

describe('<Button />', () => {
  it('should render', () => {
    cy.mount(<Button text="Submit" />);

    cy.findByText('Submit').should('not.be.disabled');
  });

  it('should be disabled', () => {
    cy.mount(<Button text="Submit" disabled />);

    cy.findByText('Submit').should('be.disabled');
  });
});
