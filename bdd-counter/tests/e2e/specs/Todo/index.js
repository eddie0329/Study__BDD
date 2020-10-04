const { visit, the } = cy;

Given("I am on the main page", () => {
  cy.server();
  cy.route("https://jsonplaceholder.typicode.com/posts/1", {
    title: "hello",
  });
  visit("/");
});

Then("I can see Todo with text:", (rawData) => {
  const stats = rawData.rowsHash();
  const title = stats["title"];
  cy.log(stats);
  the("todo").contains(title);
});
