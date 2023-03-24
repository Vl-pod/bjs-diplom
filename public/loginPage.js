'use strict'

const userForm = new UserForm();

userForm.loginFormCallback = (data) => {
	const {login, password} = data;

	const cb = (responce) => {
		if (responce.success) {
			location.reload();
		} else { 
			userForm.setLoginErrorMessage(responce.error);
		}
	};

	ApiConnector.login({login, password }, cb);
};	

userForm.registerFormCallback = (data) => {
	const {login, password} = data;

	const cb = (responce) => {
		if (responce.success) {
			location.reload();
		} else { 
			userForm.setRegisterErrorMessage(responce.error);
		}
	};

	ApiConnector.register({login, password }, cb);
};	