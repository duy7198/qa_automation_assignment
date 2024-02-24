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
        Then Sign up - Verify error message contains the following text is displayed
        """
        There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.
        """

    Scenario: Verify show error message if user click Create an account button without inputting any info
        When Sign up - Click Create an account button
        Then Sign up - Verify field error messages contains text "This is a required field." are displayed

    Scenario: Verify show error message if user input invalid email format
        When Sign up - Input first name "Duy"
        And Sign up - Input last name "Huynh"
        And Sign up - Input email "abc@abc"
        And Sign up - Input password "@abcd1234"
        And Sign up - Input confirm password "@abcd1234"
        And Sign up - Click Create an account button
        Then Sign up - Verify email error message contains the following text is displayed
        """
        Please enter a valid email address (Ex: johndoe@domain.com).
        """
    
    Scenario: Verify show error message if user input password less than minimum lenght
        When Sign up - Input first name "Duy"
        And Sign up - Input last name "Huynh"
        And Sign up - Input random valid email
        And Sign up - Input password "@a"
        Then Sign up - Verify passoword error message contains the following text is displayed
        """
        Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.
        """

    Scenario: Verify show error message if user input password equal to minimum lenght but not contain special characters
        When Sign up - Input first name "Duy"
        And Sign up - Input last name "Huynh"
        And Sign up - Input random valid email
        And Sign up - Input password "abcd1234"
        Then Sign up - Verify passoword error message contains the following text is displayed
        """
        Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.
        """

    Scenario: Verify show error message if user input confirm password not match with password 
        When Sign up - Input first name "Duy"
        And Sign up - Input last name "Huynh"
        And Sign up - Input random valid email
        And Sign up - Input password "@abcd1234"
        And Sign up - Input confirm password "@abcd12346"
        And Sign up - Click Create an account button
        Then Sign up - Verify confirm passoword error message contains text "Please enter the same value again." is displayed