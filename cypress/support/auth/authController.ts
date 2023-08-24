import users from '../../fixtures/users'
import authService from './authService'

class AuthController {
	login(username: string, options: Authentication.ILoginOptions) {
		const user = users[username]

		if (user == null) {
			throw new Error('User not found')
		}

		if (options.isCachedSession) {
			authService.sessionLogin(user.email, user.password)
		} else {
			authService.login(user.email, user.password)
		}
	}
}

export default new AuthController()
