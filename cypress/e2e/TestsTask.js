import { Login } from "../pages/Login";

const LoginPage = new Login();

describe("3 Tasks", () => {
  it("Incorrect creds alert validation", () => {
    // visit page
    LoginPage.navigate();
    // enter incorrect creds
    cy.signIn(Cypress.env("incorrectEmail"), Cypress.env("incorrectPassword"));
  });
  // check alert message
  LoginPage.validateAlertMessag();
});
