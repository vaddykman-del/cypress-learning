describe("Scroll Test", () => {
  // cypress code

  it("scrollIntoView test", () => {
    cy.visit("https://www.edu.goit.global/account/login");

    cy.get('[name="email"]').type("user888@gmail.com");
    cy.get('[name="password"]').type("1234567890");
    cy.get(".next-1jphuq5").click();
    cy.get('[id="go-to-the-course-homepage-widget"]', { timeout: 10000 })
      .scrollIntoView()
      .should("be.visible");
  });
});
