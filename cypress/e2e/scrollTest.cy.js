describe("Scroll Test", () => {
  // cypress code

  it("scrollIntoView test", () => {
    cy.visit("https://www.edu.goit.global/account/login");

    cy.get('[name="email"]').type(Cypress.env("userEmail"));
    cy.get('[name="password"]').type(Cypress.env("userPassword"));
    cy.get(".next-1jphuq5").click();
    cy.get('[id="go-to-the-course-homepage-widget"]', { timeout: 10000 })
      .scrollIntoView()
      .should("be.visible");
  });
});
