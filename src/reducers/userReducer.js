const userReducer = (state = {
	firstName : '',
	lastName  : '',
	email     : '',
	password  : '',
	mobile    : '',
	users     : [],
	loginUser : {},

}, action) => {
	console.log('userReducer action =>',action);
	switch (action.type) {
		case 'REGISTER_USER' :
			state = {
				...state,
				firstName : action.payload.firstName,
				lastName  : action.payload.lastName,
				email     : action.payload.email,
				password  : action.payload.password,
				mobile    : action.payload.mobile ,
				users     : [ 
								...state.users, 
								{
									firstName : action.payload.firstName,
									lastName  : action.payload.lastName,
									email     : action.payload.email,
									password  : action.payload.password,
									mobile    : action.payload.mobile ,
								}
							]
			};
			break;

		case 'LOGIN_USER' :

			var userExist = state.users.filter((item, index)=>{
								return item.email === action.payload.email && item.password === action.payload.password;
							})[0];
			if(userExist){
				state = {
					...state,
					loginUser : userExist,
				};
			}
			break;

		default : 
			break;

	}
	console.log('Reducer state =>',state);
	return state;
}

export default userReducer;