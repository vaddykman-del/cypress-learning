describe("Наш перший блок тестів", () => {
  // cypress code
  beforeEach(() => {
    cy.visit("https://www.edu.goit.global/account/login");
  });

  it("Тест відвідування сайту LMS", () => {
    // Знаходимо інпут з поштою та вводимо email
    cy.get('[name="email"]').type(Cypress.env("userEmail"));
    cy.get('[name="password"]').type(Cypress.env("userPassword"));
    cy.get(".next-1jphuq5").click();
  });
  it("Тестуємо кнопку", () => {
    //

    // Знаходимо перевіряємо кнопку
    cy.get('[type="submit"]').should("have.text", "Log in");
    cy.get('[type="submit"]').should(
      "have.css",
      "background-color",
      "rgb(255, 107, 10)",
    );
  });
});
