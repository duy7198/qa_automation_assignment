Feature: Log In

    Background:
        Given Navigate Login page

    Scenario Outline: Verify user can login and navigte Account page
        When Login - Input email "<email>"
        And Login - Input password "<password>"
        And Login - Click Sign In button
        Then Account - Verify page is displayed with title "My Account"

        Examples:
            | email                    | password |
            | test.cypress.1@gmail.com | @abcd1234 |
            | test.cypress.2@gmail.com | @abcd1234 |
            | test.cypress.3@gmail.com | @abcd1234 |

    Scenario: Verify show error message if user click Sign In button without inputting any info
        When Login - Click Sign In button
        Then Login - Verify error message contains the following text is displayed
        """
        A login and a password are required.
        """

    Scenario: Verify show error message if user input incorrect password
        When Login - Input email "test.cypress@gmail.com"
        And Login - Input password "@abcd123456"
        And Login - Click Sign In button
        Then Login - Verify error message contains the following text is displayed
        """
        The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.
        """

    Scenario: Verify show error message if user input incorrect email
        When Login - Input email "test.cypress.incorrect@gmail.com"
        And Login - Input password "@abcd1234"
        And Login - Click Sign In button
        Then Login - Verify error message contains the following text is displayed
        """
        The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.
        """
    Scenario: Verify user can navigate Sign Up page from Login page
        When Login - Click Create an account button
        Then Sign up - Verify page is displayed with title "Create New Customer Account"

    Scenario: Verify user can navigate Forgot password page from Login page
        When Login - Click Forget password link
        Then Forgot passoword - Verify page is displayed with title "Forgot Your Password?"
