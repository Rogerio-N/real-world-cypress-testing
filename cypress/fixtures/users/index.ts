import invalidUsers from './invalidUsers'
import { IUserFixture } from './users'
import validUsers from './validUsers'

const users: IUserFixture = {
	...validUsers,
	...invalidUsers,
}

export default users
