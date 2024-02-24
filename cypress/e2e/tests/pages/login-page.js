class LogInPage {

    emailField = '#email'
    passwordField = '#pass'
    signInButton = '#send2'

    inputEmail(email) {
        cy.get(this.emailField).type(email)
    }

    inputPassword(password) {
        cy.get(this.passwordField).type(password)
    }

    clickSignInButton() {
        cy.get(this.signInButton).click()
    }
}

module.exports = new LogInPage()