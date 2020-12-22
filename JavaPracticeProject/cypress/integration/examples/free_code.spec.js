/// <reference types="Cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('https://guide.freecodecamp.org/certifications')
   // cy.get('.navbar-nav').contains('Commands').click()
   // cy.get('.dropdown-menu').contains('Navigation').click()
  })

  it('cy.go() - go back or forward in the browser\'s history', () => {
    // https://on.cypress.io/go
    cy.wait(3000);
    cy.get('.title panelStyle panel-title').contains('angular')
     .get('').should('have.attr', 'href')
     .then((href) => {
       cy.visit(href)
     })

   
   
  })

  it('cy.reload() - reload the page', () => {
    // https://on.cypress.io/reload
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })
})
