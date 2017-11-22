export class LoginResponse {

	token:string;
	user:User;
}

export class User{
	_id:string;
	username:string;
}