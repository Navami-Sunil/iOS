Feature: The saucelabs demo application
  Scenario Outline: As a user, I can log in and use features

    Given I am on the home page
    When I add to cart,checkout,draw
    Then I should see a drawing

    
