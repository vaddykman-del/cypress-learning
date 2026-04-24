export class Login {
  navigate() {
    cy.visit("https://www.edu.goit.global/account/login");
  }
  validateLoginTitle() {
    cy.contains("h2", "Login").should("be.visible");
    cy.contains("h2", "Login").should("have.text", "Login");
  }
  validateInputs() {
    cy.get("#user_email").should("be.visible");
    cy.get("#user_password").should("be.visible");
  }
  validateButton() {
    cy.get(".eckniwg2").should("be.visible");
  }

  validatePasswordLink() {
    cy.get('a[href="/account/password/restore"]').should("be.visible");
    cy.get('a[href="/account/password/restore"]').should(
      "have.text",
      "I can't remember the password",
    );
  }

  validateAlertMessage() {
    cy.contains("An incorrect username or password has been submitted").should(
      "be.visible",
    );
  }
}
