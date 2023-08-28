import users from '../../fixtures/users'
import authService from './authService'

class AuthController {
	login(username: string, options: Authentication.ILoginOptions) {
		const user = users[username]

		if (user == null) {
			throw new Error('M=login, R=User not found')
		}

		if (options.isCachedSession) {
			authService.sessionLogin(user.email, user.password)
		} else {
			authService.login(user.email, user.password)
		}
	}

	register(username: string) {
		const user = users[username]
		if (user == null) {
			throw new Error('M=register, R=User not found')
		}
		authService.register(user.username, user.email, user.password)
	}
}

export default new AuthController()
