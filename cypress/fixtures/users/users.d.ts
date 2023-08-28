interface IUser {
	email: string
	password: string
	username: string
}

export interface IUserFixture {
	[username: string]: IUser
}
