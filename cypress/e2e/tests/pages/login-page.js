class LogInPage {
    url = '/customer/account/login/'

    emailField = '#email'
    passwordField = '#pass'
    signInButton = '#send2'
    errorMessage = '[class="page messages"]'
    forgotPasswordLink = 'a[class="action remind"]'
    createAnAccountButton = 'a[class="action create primary"]'

    navigatePage() {
        cy.visit(this.url)
    }

    inputEmail(email) {
        cy.get(this.emailField).type(email)
    }

    inputPassword(password) {
        cy.get(this.passwordField).type(password)
    }

    clickSignInButton() {
        cy.get(this.signInButton).click()
    }

    isErrorMessageContainsTextDisplayed(text) {
        cy.get(this.errorMessage).should('contain.text', text)
    }

    clickForgotPasswordLink() {
        cy.get(this.forgotPasswordLink).click()
    }

    clickCreateAnAccountButton() {
        cy.get(this.createAnAccountButton).click()
    }
}

module.exports = new LogInPage()