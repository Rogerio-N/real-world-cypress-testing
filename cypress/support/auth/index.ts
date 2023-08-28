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

Cypress.Commands.add('register', (username: string) => {
	authController.register(username)
})
