import loginPage from '../../pages/login'

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
}

export default new AuthService()
