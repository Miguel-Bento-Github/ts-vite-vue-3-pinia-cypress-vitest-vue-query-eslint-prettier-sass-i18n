describe("home page", () => {
  it("should fetch data", () => {
    cy.intercept("GET", "https://dummyjson.com/http/200/Hello%20World", {
      statusCode: 200,
      fixture: "../fixtures/data.json",
    }).as("data");

    cy.visit("/home")
      .wait("@data")
      .location()
      .should((location) => {
        expect(location.pathname).to.equal("/home");
      })
      .dataCy("home-content")
      .should("exist")
      .should("contain.text", "Hello World");
  });
});
