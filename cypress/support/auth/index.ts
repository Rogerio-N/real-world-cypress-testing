import authController from './authController'

Cypress.Commands.add(
	'login',
	(username: string, options?: Authentication.ILoginOptions) => {
		if (options == null) {
			options = defaultLoginOptions
		}
		authController.login(username, options)
	}
)

const defaultLoginOptions: Authentication.ILoginOptions = {
	isCachedSession: true,
}
