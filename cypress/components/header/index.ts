import { HeaderTextEnum } from './HeaderTextEnum'

class Header {
	private elements = {
		HomeLink: () =>
			cy.get('#navbar-default').findByText(HeaderTextEnum.HOME),
		SingInLink: () =>
			cy.get('#navbar-default').findByText(HeaderTextEnum.SIGN_IN),
		SingUpLink: () =>
			cy.get('#navbar-default').findByText(HeaderTextEnum.SIGN_UP),
	}

	clickHomeLink() {
		this.elements.HomeLink().click()
	}

	clickSignInLink() {
		this.elements.SingInLink().click()
	}

	getSignInLink() {
		return this.elements.SingInLink()
	}

	clickSignUpLink() {
		this.elements.SingUpLink().click()
	}
}

export default new Header()
