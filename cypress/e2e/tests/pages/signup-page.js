class SignUpPage {
    
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
        cy.get(this.errorMessage).should('exist').contains(text)
    }

    areFieldErrorMessagesContainsTextDisplayed(text) {
        cy.get(this.fieldErrorMessages).each((element) => {
            expect(element.text()).to.be.contains(text)
        })
    }

    isConfirmPasswordErrorMessageContainsTextDisplayed(text) {
        cy.get(this.confirmPasswordError).should('exist').contains(text)
    }

    isPasswordErrorMessageContainsTextDisplayed(text) {
        cy.get(this.passwordError).should('exist').contains(text)
    }

    isEmailErrorMessageContainsTextDisplayed(text) {
        cy.get(this.emailError).should('exist').contains(text)
    }
}   

module.exports = new SignUpPage()