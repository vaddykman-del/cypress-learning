describe("login command test", () => {
  beforeEach(() => {
    cy.visit("https://www.edu.goit.global/account/login");
  });
  it("admin login", () => {
    cy.signIn(Cypress.env("incorrectEmail"), Cypress.env("incorrectPassword"));
  });

  it("user login", () => {
    cy.signIn(Cypress.env("userEmail"), Cypress.env("userPassword"));
  });

  it("manager login", () => {
    cy.signIn(Cypress.env("managerEmail"), Cypress.env("managerPassword"));
  });
});
