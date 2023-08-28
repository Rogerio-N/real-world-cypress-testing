import { IUserFixture } from '../users'

const invalidUsers: IUserFixture = {
	notRegistered: {
		email: 'not.registered.user@mock.com',
		password: 'not$registered123',
		username: 'notRegistered',
	},
	badEmail: {
		email: 'invalid.email@mock',
		password: 'invalid$email123',
		username: 'badEmail',
	},
	emptyEmail: {
		email: ' ',
		password: 'invalid$email123',
		username: 'emptyEmail',
	},
	emptyPassword: {
		email: 'invalid.email@mock.com',
		password: ' ',
		username: 'emptyPassword',
	},
}

export default invalidUsers
