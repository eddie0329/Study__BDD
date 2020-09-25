const { visit, the, getStore } = cy;

Given("I'm on the main page", () => {
  visit("/");
  the("logo").contains("paper.ly");
});
Then("I should see the follow stats:", (rawData) => {
  const stats = rawData.rowsHash();
  const daysRemaining = stats["days remaining"];
  const rollsRemaining = stats["rolls remaining"];
  const rollRate = stats["roll rate"];
  getStore().setState("daysRemaining", daysRemaining);
  getStore().setState("rollsRemaining", rollsRemaining);
  getStore().setState("rollRate", rollRate);
  the("days-remaining").contains(daysRemaining);
  the("rolls-remaining").contains(rollsRemaining);
  the("roll-rate").contains(rollRate);
});
