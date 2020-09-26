const { visit, the, getStore } = cy;

// Background:
Given("I am on the main page", () => {
  visit("/");
});

// Scenario: Counter display
Then("I can see count display with {int}", (countDisplay) => {
  the("counter").contains(countDisplay);
});

// Click plus button
When("I click plus button", () => {
  the("plus-button").click();
});
Then("count display should {int}", (countDisplay) => {
  the("counter").contains(countDisplay);
});

// Click minus button
When("I click minus button", () => {
  the("minus-button").click();
});
Then("count display should {int}", (countDisplay) => {
  the("counter").contains(countDisplay);
});

// Scenario: Click plus button when count is 100
Given("Count is {int}", (newCount) => {
  getStore().setState("counter", "count", newCount);
});
When("I click plus button", () => {
  // set state
  the("plus-button").click();
});
Then("count display should {int}", (countDisplay) => {
  the("counter").contains(countDisplay);
});
