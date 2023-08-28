import { IUserFixture } from '../users'

const validUsers: IUserFixture = {
	rootUser: {
		email: 'root@mock.com',
		password: 'root123',
		username: 'root',
	},
	registerUser: {
		email: 'not.register@mock.com',
		password: 'register123',
		username: 'New User',
	},
}

export default validUsers
