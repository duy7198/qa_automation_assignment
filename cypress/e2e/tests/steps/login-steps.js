import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import LogInPage from './../pages/login-page'

Given('Navigate Login page', () => {
    cy.visit('/customer/account/login')
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