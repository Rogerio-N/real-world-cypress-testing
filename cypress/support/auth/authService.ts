import loginPage from '../../pages/loginPage'
import registerPage from '../../pages/registerPage'
import { hasOperationName } from '../../utils/graphqlUtils'

class AuthService {
	login(email: string, password: string) {
		loginPage.typeEmail(email)
		loginPage.typePassword(password)
		loginPage.clickButtonSignin()
	}

	sessionLogin(email: string, password: string) {
		cy.session(
			[email, password],
			() => {
				cy.visit('/login')
				cy.intercept('POST', '/api', (req) => {
					if (hasOperationName(req, 'Login')) {
						req.alias = 'login'
					}
				})
				this.login(email, password)
				cy.wait(['@login'])
			},
			{
				validate() {
					cy.visit('/settings')
				},
			}
		)
	}

	register(name: string, email: string, password: string) {
		registerPage.typeUsername(name)
		registerPage.typeEmail(email)
		registerPage.typePassword(password)
		registerPage.clickButtonSignUp()
	}
}

export default new AuthService()
