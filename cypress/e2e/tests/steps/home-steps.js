import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import HomePage from './../pages/home-page'

Given('Navigate Home page', () => {
    HomePage.navigatePage()
})

Then('Home - Verify Home page is displayed', () => {
    HomePage.isPageDisplayed()
})

When('Home - Click Create an account link', () => {
    HomePage.clickCreateAnAccountLink()
})

When('Home - Click Sign In link', () => {
    HomePage.clickSignInLink()
})