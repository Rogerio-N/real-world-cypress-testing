import header from '../components/header'
import registerResponse from '../fixtures/users/response/registerUser.json'
import { hasOperationName } from '../utils/graphqlUtils'

describe('Register new user test scenarios', () => {
	beforeEach(() => {
		cy.visit('/')
		header.clickSignUpLink()
	})

	it('Successfull register a new user', () => {
		cy.intercept('POST', '/api', (req) => {
			if (hasOperationName(req, 'Signup')) {
				req.alias = 'register'
				req.reply(registerResponse)
			}
		})
		cy.register('registerUser')
		cy.wait('@register')
		cy.url().should('eq', `${Cypress.config('baseUrl')}/`)
	})
})
