import { LoginTextEnum } from './LoginTextEnum'

class LoginPage {
	private elements = {
		inputEmail: () => cy.findByPlaceholderText(LoginTextEnum.EMAIL),
		inputPassword: () => cy.findByPlaceholderText(LoginTextEnum.PASSWORD),
		buttonSignin: () =>
			cy.findByRole('button', { name: LoginTextEnum.SIGN_IN }),
		loginAlert: () => cy.get('[role="alert"]'),
		loginForm: () => cy.get('form'),
	}

	typeEmail(email: string) {
		this.elements.inputEmail().type(email)
	}

	typePassword(password: string) {
		this.elements.inputPassword().type(password)
	}

	clickButtonSignin() {
		this.elements.buttonSignin().click()
	}

	getAlert() {
		return this.elements.loginAlert()
	}

	getInputValidationMessage(expectedText: string) {
		return this.elements.loginForm().contains(expectedText)
	}
}

export default new LoginPage()
