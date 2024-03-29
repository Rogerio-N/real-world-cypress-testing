import Header from '../components/header'
import loginPage from '../pages/loginPage'
import { aliasRequest } from '../utils/graphqlUtils'

describe('Login test scenarios', () => {
	beforeEach(() => {
		cy.visit('/login')
	})

	it('Success to login', () => {
		cy.intercept('POST', '/api', (req) => {
			aliasRequest(req, 'Login')
		})
		cy.login('rootUser', { isCachedSession: false })
		cy.wait('@gqlLoginRequest').then(({ response }) => {
			expect(response?.body.data.login.token).not.be.empty
			expect(response?.body.errors).not.exist
		})
		Header.getSignInLink().should('not.exist')
	})

	it('Error to login, user not found', () => {
		cy.intercept('POST', '/api', (req) => {
			aliasRequest(req, 'Login')
		})
		cy.login('notRegistered', { isCachedSession: false })
		cy.wait('@gqlLoginRequest').then(({ response }) => {
			expect(response?.body.errors[0].message).to.be.eq('Bad Credentials')
		})
		cy.url().should('contain', '/login')
		loginPage.getAlert().should('contain', 'Bad Credentials')
	})

	it('Error to login, email badly formatted', () => {
		cy.login('badEmail', { isCachedSession: false })
		loginPage
			.getInputValidationMessage('Invalid email')
			.should('exist')
			.and('be.visible')
	})

	it('Error to login, dont send email', () => {
		cy.login('emptyEmail', { isCachedSession: false })
		loginPage
			.getInputValidationMessage('Email is required')
			.should('exist')
			.and('be.visible')
	})

	it('Error to login, dont send password', () => {
		cy.login('emptyPassword', { isCachedSession: false })
		loginPage
			.getInputValidationMessage('Password is required')
			.should('exist')
			.and('be.visible')
	})
})
