// describe("Mobile phone replenishment", ()=> {
//   contex("", ()=> {

//     it("Check", ()=> {

//     })

//   })
  
// })

/// <reference types="Cypress" />

it("Using get with find and eq on privat24", ()=> {
  cy.visit("https://next.privat24.ua/deposit/open");
  cy.get('tbody').find('tr').eq(8).find('div>button')
})

it("Using get with find and eq on cypress.io", ()=> {
  cy.viewport(1600, 900)
  cy.visit("https://docs.cypress.io/api/cypress-api/custom-commands#Overwrite-Existing-Commands");
  cy.get('ul[class="scrollactive-nav"]').find('li>a').eq(1)
})

