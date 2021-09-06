Cypress.Commands.add("switchModes", (modes) => {
  modes.forEach((mode) => {
    // switch mode
    cy.get("a").contains(mode).click()
    cy.get("h2")
      .should("contain", "You selected " + mode.toUpperCase())
      .should("be.visible")
    cy.get("h2").should("not.contain", "Select a mode")
    // click again to switch back
    cy.get("a").contains(mode).click()
    cy.get("h2").should("not.contain", "You selected " + mode.toUpperCase())
    cy.get("h2").should("contain", "Select a mode").should("be.visible")
  })
})

Cypress.Commands.add("loadModes", (modes) => {
  modes.forEach((mode) => {
    // switch mode
    cy.visit("/app/" + mode.toLowerCase())
    cy.get("h2")
      .should("contain", "You selected " + mode.toUpperCase())
      .should("be.visible")
  })
})
