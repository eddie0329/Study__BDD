Feature: Displaying stats

  Background:
    Given I'm on the main page

  Scenario: Standard household
    Then I should see the follow stats:
    | days remaining  | 5  |
    | rolls remaining | 10 |
    | roll rate       | 2  |

  Scenario: Heavy-use household
    Then I should see the follow stats:
    | days remaining  | 1  |
    | rolls remaining | 10 |
    | roll rate       | 10 |