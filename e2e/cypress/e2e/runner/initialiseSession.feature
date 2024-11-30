Feature: Initialise session - prepopulate a session

  Scenario: The configured title is displayed
    Given the form "initialiseSession" exists
    When the session is initialised with the options
      | form              | callbackUrl                                                | redirectPath | message | htmlMessage | title               | redirectUrl |
      | initialiseSession | https://61bca17e-fe74-40e0-9c15-a901ad120eca.mock.pstmn.io | /summary     |         |             | Update your details | http://localhost:3009/help/cookies |
    And I go to the initialised session URL
    And I declare and continue
    Then I see "Cookies are files saved on your phone"
    When  I revisit the status page
    Then I see "Cookies are files saved on your phone"
