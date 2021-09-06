const modes = ["Red", "Green", "Blue"]

describe("App", function () {
  it("loads", function () {
    cy.visit("/app")
    cy.get("h2").should("contain", "Select a mode").should("be.visible")
  })

  it("can switch modes", function () {
    cy.visit("/app")
    cy.switchModes(modes) // see cypress/support/commands.js
  })

  it("can load modes", function () {
    cy.loadModes(modes) // see cypress/support/commands.js
  })
})
