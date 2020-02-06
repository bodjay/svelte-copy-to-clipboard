/// <reference types="Cypress" />

context("Copy and paste library test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should test all actions from example", () => {
    cy.get("#copy-anchor").click();

    cy.on("window:alert", str => {
      expect(str).to.equal(`successfully copied!`);
    });

    cy.get("#copy-button").click();

    cy.on("window:alert", str => {
      expect(str).to.equal(`successfully copied!`);
    });

    cy.get(".try-input").type("e2e text");
    cy.get("#try-copy-button").click();

    cy.on("window:alert", str => {
      expect(str).to.equal(`successfully copied!`);
    });
  });
});
