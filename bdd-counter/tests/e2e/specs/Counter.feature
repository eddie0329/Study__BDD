Feature: Counter
  Background: 
    Given I am on the main page

  Scenario: Counter display
    Then I can see count display with 0

  Scenario: Click plus button
    When I click plus button
    Then count display should 1

  Scenario: Click minus button
    When I click minus button
    Then count display should -1

  Scenario: Click plus button when count is 100
    Given Count is 100
    When I click plus button
    Then count display should 101
