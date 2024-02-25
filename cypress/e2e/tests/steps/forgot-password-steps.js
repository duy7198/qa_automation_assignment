import {Then} from "cypress-cucumber-preprocessor/steps"
import ForgotPasswordPage from './../pages/forgot-password-page'

Then('Forgot passoword - Verify page is displayed with title {string}', (title) => {
    ForgotPasswordPage.isPageDisplayedWithTitle(title)
})