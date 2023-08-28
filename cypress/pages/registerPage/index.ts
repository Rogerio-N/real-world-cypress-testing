import { RegisterTextEnum } from './RegisterTextEnum'

class RegisterPage {
	private elements = {
		inputUsername: () =>
			cy.findByPlaceholderText(RegisterTextEnum.USERNAME),
		inputEmail: () => cy.findByPlaceholderText(RegisterTextEnum.EMAIL),
		inputPassword: () =>
			cy.findByPlaceholderText(RegisterTextEnum.PASSWORD),
		buttonSignUp: () =>
			cy.findByRole('button', { name: RegisterTextEnum.SIGN_UP }),
	}

	typeUsername(username: string) {
		this.elements.inputUsername().type(username)
	}

	typeEmail(email: string) {
		this.elements.inputEmail().type(email)
	}

	typePassword(password: string) {
		this.elements.inputPassword().type(password)
	}

	clickButtonSignUp() {
		this.elements.buttonSignUp().click()
	}
}

export default new RegisterPage()
