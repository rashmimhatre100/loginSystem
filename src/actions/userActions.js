export function registerUser(data){
	return{
		type    : 'REGISTER_USER',
		payload : data,
	};
}

export function LoginUser(data){
	return{
		type    : 'LOGIN_USER',
		payload : data,
	};
}