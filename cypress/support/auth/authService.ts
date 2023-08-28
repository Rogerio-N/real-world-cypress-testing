import loginPage from '../../pages/loginPage'
import registerPage from '../../pages/registerPage'

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
				this.login(email, password)
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
