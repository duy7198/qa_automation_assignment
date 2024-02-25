import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import LogInPage from './../pages/login-page'

Given('Navigate Login page', () => {
    LogInPage.navigatePage()
})

When('Login - Input email {string}', (email) => {
    LogInPage.inputEmail(email)
})

And('Login - Input password {string}', (password) => {
    LogInPage.inputPassword(password)
})

And('Login - Click Sign In button', () => {
    LogInPage.clickSignInButton()
})

Then('Login - Verify error message contains the following text is displayed', (text) => {
    LogInPage.isErrorMessageContainsTextDisplayed(text)
})

And('Login - Click Forget password link', () => {
    LogInPage.clickForgotPasswordLink()
})

And('Login - Click Create an account button', () => {
    LogInPage.clickCreateAnAccountButton()
})