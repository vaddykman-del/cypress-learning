Cypress.Commands.add("signIn", (email, password) => {
  cy.get("#user_email").type(email);

  cy.get("#user_password").type(password);

  cy.get("[type='submit']").click();
});
