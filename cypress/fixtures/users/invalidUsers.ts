import { IUserFixture } from './users'

const invalidUsers: IUserFixture = {
	notRegistered: {
		email: 'not.registered.user@mock.com',
		password: 'not$registered123',
	},
	badEmail: {
		email: 'invalid.email@mock',
		password: 'invalid$email123',
	},
	emptyEmail: {
		email: ' ',
		password: 'invalid$email123',
	},
	emptyPassword: {
		email: 'invalid.email@mock.com',
		password: ' ',
	},
}

export default invalidUsers
