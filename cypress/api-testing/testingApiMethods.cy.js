describe("Testing API method", () => {
  const request1 = {
    method: "POST",
    url: "https://httpbin.org/post",
    failOnStatusCode: false,
  };

  const request2 = {
    method: "GET",
    url: "https://httpbin.org/post",
    failOnStatusCode: false,
  };
  it("response should be 200", () => {
    cy.request(request1).then((response) => {
      assert.equal(200, response.status);
    });
  });
  it("response should be 200", () =>
    cy.request2(request).then((response) => {
      assert.equal(200, response.status);
    }));
});
