import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import SignUpPage from '../pages/signup-page'

Given('Navigate Sign up page', () => {
    SignUpPage.navigatePage()
})

When('Sign up - Input first name {string}', (firstname) => {
    SignUpPage.inputFirstName(firstname)
})

When('Sign up - Input last name {string}', (lastname) => {
    SignUpPage.inputLastName(lastname)
})

And('Sign up - Input email {string}', (email) => {
    SignUpPage.inputEmail(email)
})

And('Sign up - Input random valid email', () => {
    const randomString = Math.random().toString(36).substring(7)
    SignUpPage.inputEmail(randomString + '@gmail.com')
})

And('Sign up - Input password {string}', (password) => {
    SignUpPage.inputPassword(password)
})

And('Sign up - Input confirm password {string}', (confirmPassword) => {
    SignUpPage.inputConfirmPassword(confirmPassword)
})

And('Sign up - Click Create an account button', () => {
    SignUpPage.clickCreateAccountButton()
})

Then('Sign up - Verify error message contains the following text is displayed', (docString) => {
    SignUpPage.isErrorMessageContainsTextDisplayed(docString)
})

Then('Sign up - Verify field error messages contains text {string} are displayed', (text) => {
    SignUpPage.areFieldErrorMessagesContainsTextDisplayed(text)
})

Then('Sign up - Verify confirm passoword error message contains text {string} is displayed', (text) => {
    SignUpPage.isConfirmPasswordErrorMessageContainsTextDisplayed(text)
})

Then('Sign up - Verify passoword error message contains the following text is displayed', (text) => {
    SignUpPage.isPasswordErrorMessageContainsTextDisplayed(text)
})

Then('Sign up - Verify email error message contains the following text is displayed', (text) => {
    SignUpPage.isEmailErrorMessageContainsTextDisplayed(text)
})

Then('Sign up - Verify page is displayed with title {string}', (title) => {
    SignUpPage.isDisplayedWithTtitle(title)
})