class HomePage {
    url = '/'

    logo = '[aria-label="store logo"]'
    createAnAccountLink = '.panel > .header > li:not([class="authorization-link"]) > a'
    signInLink = '.panel > .header > .authorization-link > a'

    navigatePage() {
        cy.visit(this.url)
    }

    isPageDisplayed() {
        cy.location('pathname').should('eq', '/')
        cy.get(this.logo).should('exist')
    }

    clickCreateAnAccountLink() {
        cy.get(this.createAnAccountLink).click()
    }

    clickSignInLink() {
        cy.get(this.signInLink).click()
    }
}

module.exports = new HomePage()