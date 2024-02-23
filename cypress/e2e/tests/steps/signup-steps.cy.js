/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import SignUpPage from '../pages/signup-page'
import AccountPage from '../pages/account-page'

Given('Navigate Sign up page', () => {
    cy.visit('/customer/account/create')
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

Then('Account - Verify page is displayed', () => {
    AccountPage.isDisplayed()
})

Then('Sign up - Verify error message contains text {string} is displayed', (text) => {
    SignUpPage.isErrorMessageContainsTextDisplayed(text)
})

Then('Sign up - Verify field error messages contains text {string} are displayed', (text) => {
    SignUpPage.isFieldErrorMessagesContainsTextDisplayed(text)
})
