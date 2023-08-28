import invalidUsers from './data/invalidUsers'
import { IUserFixture } from './users'
import validUsers from './data/validUsers'

const users: IUserFixture = {
	...validUsers,
	...invalidUsers,
}

export default users
