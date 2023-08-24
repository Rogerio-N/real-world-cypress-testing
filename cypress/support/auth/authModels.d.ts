declare namespace Cypress {
	interface Chainable {
		login(
			username: string,
			options?: Authentication.ILoginOptions
		): Chainable<void>
	}
}
declare namespace Authentication {
	interface ILoginOptions {
		isCachedSession?: boolean
	}
}
