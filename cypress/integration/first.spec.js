// describe("Mobile phone replenishment", ()=> {
//   contex("", ()=> {

//     it("Check", ()=> {

//     })

//   })
  
// })

/// <reference types="Cypress" />

// it("By id", ()=> {
//   cy.visit("http://www.facebook.com/?lang=en-US");
//   cy.get("input#email")
// })

// it("By class", ()=> {
//   cy.visit("https://docs.cypress.io/api/cypress-api/custom-commands#Syntax");
//   cy.get(".main-content-title")
// })

// it("By Tag", ()=> {
//   cy.visit("https://docs.cypress.io/api/cypress-api/custom-commands#Syntax");
//   cy.get("nav")
// })

// it("By Tag value", ()=> {
//   cy.visit("http://www.facebook.com/?lang=en-US");
//   cy.get("[name='pass']")
// })

// it("By Different Tag", ()=> {
//   cy.visit("http://www.facebook.com/?lang=en-US");
//   cy.get('[role="button"][data-testid="open-registration-form-button"]')
// })

// it("By Contains class", ()=> {
//   cy.visit("https://next.privat24.ua/");
//   cy.get('div[class^="card"]')
// })

it("Using get with find and eq on privat24", ()=> {
  cy.visit("https://next.privat24.ua/deposit/open");
  cy.get('tbody').find('tr').eq(8).find('div>button')
})

it.only("Using get with find and eq on cypress.io", ()=> {
  cy.viewport(1600, 900)
  cy.visit("https://docs.cypress.io/api/cypress-api/custom-commands#Overwrite-Existing-Commands");
  cy.get('ul[class="scrollactive-nav"]').find('li>a').eq(1)
})

