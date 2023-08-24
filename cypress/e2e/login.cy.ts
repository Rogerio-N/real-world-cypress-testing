import Header from '../components/header'

describe('Login test cenarios', () => {
	it('Success to login', () => {
		cy.visit('/')
		Header.clickSignInLink()
		cy.intercept('POST', '/api').as('login')
		cy.login('rootUser', { isCachedSession: false })
		cy.wait('@login').its('response.statusCode').should('eq', 200)
		Header.getSignInLink().should('not.exist')
	})
})
