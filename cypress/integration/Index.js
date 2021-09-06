describe("Home Page", function () {
  it("loads", function () {
    cy.visit("/")
    cy.get("h1").contains("Project Starter").should("be.visible")
    cy.get("#home").should("be.visible")
  })

  it("can navigate to docs", function () {
    cy.visit("/")
    cy.get("a").contains("Docs").click()
    cy.get("h2").should("contain", "Getting Started").should("be.visible")
    cy.get("a").contains("Project Starter").click()
    cy.get("#home").should("be.visible")
  })

  it("can navigate to app", function () {
    cy.visit("/")
    cy.get("a").contains("App").click()
    cy.get("h2").should("contain", "Select a mode").should("be.visible")
    cy.get("a").contains("Project Starter").click()
    cy.get("#home").should("be.visible")
  })
})
