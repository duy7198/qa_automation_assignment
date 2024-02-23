Feature: Sign up

    Background:
        Given Navigate Sign up page

    Scenario: Verify user can create an account
        When Sign up - Input first name "Duy"
        And Sign up - Input last name "Huynh"
        And Sign up - Input random valid email
        And Sign up - Input password "@abcd1234"
        And Sign up - Input confirm password "@abcd1234"
        And Sign up - Click Create an account button
        Then Account - Verify page is displayed

    Scenario: Verify show error message if user input exist email
        When Sign up - Input first name "Duy"
        And Sign up - Input last name "Huynh"
        And Sign up - Input email "test.cypress@gmail.com"
        And Sign up - Input password "@abcd1234"
        And Sign up - Input confirm password "@abcd1234"
        And Sign up - Click Create an account button
        Then Sign up - Verify error message contains text "There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account." is displayed

    Scenario: Verify show error message if user click Create an account button without inputting any info
        When Sign up - Click Create an account button
        Then Sign up - Verify field error messages contains text "This is a required field." are displayed