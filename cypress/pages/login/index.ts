class LoginPage {
	private elements = {
		inputEmail: () => cy.findByPlaceholderText('Email'),
		inputPassword: () => cy.findByPlaceholderText('Password'),
		buttonSignin: () => cy.findByRole('button', { name: 'Sign in' }),
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
}

export default new LoginPage()
