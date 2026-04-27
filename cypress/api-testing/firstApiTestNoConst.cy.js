describe("httpbin tests", () => {
  it("response code should be 200", () => {
    cy.request({
      url: "https://httpbin.org",
      failOnStatusCode: false,
    }).then((response) => {
      assert.equal(200, response.status);
    });
  });
});
