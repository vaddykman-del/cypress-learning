export class Login {
  navigate() {
    cy.visit("https://www.edu.goit.global/account/login");
  }
  validateLoginTitle() {
    cy.contains("h2", "Login").should("be.visible").and("have.text", "Login");
  }
  validateInputs() {
    cy.get("#user_email").should("be.visible");
    cy.get("#user_password").should("be.visible");
  }
  validateButton() {
    cy.get("[type='submit']").should("be.visible");
  }

  validatePasswordLink() {
    cy.get('a[href="/account/password/restore"]')
      .should("be.visible")
      .and("have.text", "I can't remember the password");
  }

  validateIncorrectCredsMessage() {
    cy.contains("An incorrect username or password has been submitted").should(
      "be.visible",
    );
  }
  validateMissingCredsMessages() {
    cy.contains("Email address is missing").should("be.visible");
    cy.contains("Enter the password to continue").should("be.visible");
  }
  validateSuccessfullogin() {
    cy.url().should("include", "/homepage");
  }
}
