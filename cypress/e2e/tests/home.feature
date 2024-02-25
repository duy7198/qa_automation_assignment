Feature: Home

    Background:
        Given Navigate Home page

    Scenario: Verify user can navigate Home page
        Then Home - Verify Home page is displayed

    Scenario: Verify user can navigate Sign up page
        When Home - Click Create an account link
        Then Sign up - Verify page is displayed with title "Create New Customer Account"

    Scenario: Verify user can navigate Login page
        When Home - Click Sign In link
        Then Login - Verify page is displayed with title "Customer Login"