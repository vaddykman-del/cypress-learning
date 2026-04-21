describe("login command test", () => {
  beforeEach(() => {
    cy.visit("https://www.edu.goit.global/account/login");
  });
  it("admin login", () => {
    cy.signIn("user888@gmail.com", "1234567890");
  });

  it("user login", () => {
    cy.signIn("nadia.tsomko.98@gmail.com", "Nadia_Tsomko78");
  });

  it("manager login", () => {
    cy.signIn("mrdusty@duniakeliling.com", "mrdusty@duniakeliling.com");
  });
});
