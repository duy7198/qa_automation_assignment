class ForgotPasswordPage {
    url = '/customer/account/forgotpassword/'

    isPageDisplayedWithTitle(title) {
        cy.location('pathname').should('eq', this.url)
        cy.title().should('eq', title)
    }
}

module.exports = new ForgotPasswordPage()