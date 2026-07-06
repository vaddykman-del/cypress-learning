describe("httpbin tests", () => {
  it("test random ids", () => {
    for (let i = 0; i < 10; i++) {
      const randomId = getRandomInt(10000000);

      const request = {
        url: "https://httpbin.io/headers",
        id: randomId,
      };

      cy.request(request).then((response) => {
        assert.isTrue(response.status == 200);
      });
    }
  });
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
