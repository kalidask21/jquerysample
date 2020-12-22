/// <reference types="Cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('https://google.com/')
    cy.wait(5000);
    
   
  })

  it('cy.open gmail() - get the global window object', () => {
    cy.visit(Window.location); 
    cy.wait(5000); 
    cy.contains('account').visit();
    //cy.contains('firstName').
    cy.get('[type="text"]').type('me@email.com').blur()
  })


  it('cy.open signup() - get the global window object', () => {
   
  })
 
})
