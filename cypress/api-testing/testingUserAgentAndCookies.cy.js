describe("testing user agent and cookies", () => {
  const request = {
    method: "GET",
    url: "https://httpbin.org/headers",
    headers: {
      "user-agent": "My test user-agent",
      Cookie: "cookieName=cookieValue",
    },
    failsOnStatusCode: false,
  };

  it("testing user agent is set correctly", () => {
    cy.request(request).then((response) => {
      console.log(response);
      assert.equal("My test user-agent", response.requestHeaders["user-agent"]);
    });
  });
  it("cookies are set correctly", () => {
    cy.request(request).then((response) => {
      console.log(response);
      assert.equal("cookieName=cookieValue", response.requestHeaders.Cookie);
    });
  });
});
