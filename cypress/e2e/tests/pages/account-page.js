class AccountPage {
    title = '.base'

    isDisplayed() {
        cy.location('pathname').should('eq', '/customer/account/')
        cy.get(this.title).should('have.text', 'My Account')
    }
}

module.exports = new AccountPage()