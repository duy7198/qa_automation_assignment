class SignUpPage {
    url = '/customer/account/create/'
    
    firstNameField = '#firstname'
    lastNameField = '#lastname'
    emailField = '#email_address'
    passwordField = '#password'
    comfirmPasswordField = '#password-confirmation'
    createAccountButton = 'button[class="action submit primary"]'
    errorMessage = '.message-error'
    fieldErrorMessages = 'div.mage-error'
    confirmPasswordError = '#password-confirmation-error'
    passwordError = '#password-error'
    emailError = '#email_address-error'

    navigatePage() {
        cy.visit(this.url)
    }

    inputFirstName(firstName) {
        cy.get(this.firstNameField).type(firstName)
    }

    inputLastName(lastName) {
        cy.get(this.lastNameField).type(lastName)
    }

    inputEmail(email) {
        cy.get(this.emailField).type(email)
    }

    inputPassword(password) {
        cy.get(this.passwordField).type(password)
    }

    inputConfirmPassword(confirmPassword) {
        cy.get(this.comfirmPasswordField).type(confirmPassword)
    }

    clickCreateAccountButton() {
        cy.get(this.createAccountButton).click()
    }
    
    isErrorMessageContainsTextDisplayed(text) {
        cy.get(this.errorMessage).should('contain.text', text)
    }

    areFieldErrorMessagesContainsTextDisplayed(text) {
        cy.get(this.fieldErrorMessages).each((element) => {
            expect(element.text()).to.be.contains(text)
        })
    }

    isConfirmPasswordErrorMessageContainsTextDisplayed(text) {
        cy.get(this.confirmPasswordError).should('contain.text', text)
    }

    isPasswordErrorMessageContainsTextDisplayed(text) {
        cy.get(this.passwordError).should('contain.text', text)
    }

    isEmailErrorMessageContainsTextDisplayed(text) {
        cy.get(this.emailError).should('contain.text', text)
    }

    isDisplayedWithTtitle(title) {
        cy.location('pathname').should('eq', this.url)
        cy.title().should('eq', title)
    }
}   

module.exports = new SignUpPage()