describe("testing headers and params", () => {
  const request1 = {
    method: "GET",
    url: "https://httpbin.org/headers",
    headers: { customHeader: "customValue" },
    failOnStatusCode: false,
  };
  const request2 = {
    method: "GET",
    url: "https://httpbin.org/get",
    qs: {
      key: "value",
    },
    failOnStatusCode: false,
  };

  it("header is set properly", () => {
    cy.request(request1).then((response) => {
      cy.log(response.requestHeaders.customHeader);
      assert.equal("customValue", response.requestHeaders.customHeader);
    });
  });
  it("params are set properly", () => {
    cy.request(request2).then((response) => {
      assert.equal("value", response.body.args.key);
    });
  });
});
