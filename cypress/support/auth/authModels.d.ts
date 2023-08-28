declare namespace Cypress {
	interface Chainable {
		login(
			username: string,
			options?: Authentication.ILoginOptions
		): Chainable<void>

		register(username: string): Chainable<void>
	}
}
declare namespace Authentication {
	interface ILoginOptions {
		isCachedSession?: boolean
	}
}
