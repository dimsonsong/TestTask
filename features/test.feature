Feature:Chekin work a "Super Calculator" with positive case
  As a user of Protractor
  I should be able to use Cucumber
  In order to run my tests

  Scenario: Protractor and Cucumber Test
    Given I go to "http://juliemr.github.io/protractor-demo/"
    When I add "1" in  first textbox
    And I change "1" in drop-down-list
    Add I add "2" in second textbox
    And I click the Go! button
    Then I should see "3" in resutl label