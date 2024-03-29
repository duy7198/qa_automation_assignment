class AccountPage {
    url = '/customer/account/'

    isPageDisplayedWithTitle(title) {
        cy.location('pathname').should('eq', this.url)
        cy.title().should('eq', title)
    }
}

module.exports = new AccountPage()