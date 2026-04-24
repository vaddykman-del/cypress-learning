import { Login } from "../pages/Login";

const LoginPage = new Login();

describe("3 Tasks", () => {
  beforeEach(() => {
    // visit page
    LoginPage.navigate();
  });
  it("Incorrect creds alert validation", () => {
    // enter incorrect creds
    cy.signIn(Cypress.env("incorrectEmail"), Cypress.env("incorrectPassword"));
    // check alert message
    LoginPage.validateIncorrectCredsMessage();
  });
  it("Missing creds alert validation", () => {
    // enter no creds
    cy.get("[type='submit']").click();
    // check alert message
    LoginPage.validateMissingCredsMessages();
  });
  it("Complete login flow", () => {
    // check title
    LoginPage.validateLoginTitle();
    // check inputs
    LoginPage.validateInputs();
    // check button
    LoginPage.validateButton();
    // check link
    LoginPage.validatePasswordLink();
    // login
    cy.signIn(Cypress.env("userEmail"), Cypress.env("userPassword"));
    // check login
    LoginPage.validateSuccessfullogin();
  });
});
