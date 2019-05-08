// let myApp = "http://localhost:3000/"

describe("Visit page and enter essential information", function() {
  it('Shows homepage', function() {

    cy.visit("/")
    // cy.get(".form")
  })


   it("Is able to enter post details", function () {
   cy.get('form')

   })
})
