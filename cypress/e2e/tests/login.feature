Feature:

    Background:
        Given Navigate Login page

    Scenario: Verify user can login and navigte Account page
        When Login - Input email "test.cypress@gmail.com"
        And Login - Input password "@abcd1234"
        And Login - Click Sign In button
        Then Account - Verify page is displayed