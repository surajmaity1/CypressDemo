import { StepperComponent } from './stepper.component';

it('mounts', () => {
  cy.mount(StepperComponent, {
    componentProperties:{
      count : 100
    }
  })
  cy.get('[data-cy=counter').should('have.text', '100')
})