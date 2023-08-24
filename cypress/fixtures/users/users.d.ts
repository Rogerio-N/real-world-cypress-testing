interface IUser {
	email: string
	password: string
}

export interface IUserFixture {
	[username: string]: IUser
}
