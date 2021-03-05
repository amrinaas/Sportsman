import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { SIGN_IN, SIGN_UP, SET_BOARDING, SIGN_OUT, SET_TOKEN, UPLOAD_IMAGE,  MESSAGE_ERROR } from './actionTypes';

export const signUp = (payload) => {
	return {
		type: SIGN_UP,
		payload,
	};
};

export const postSignUp = (body) => (dispatch) => {
	axios
		.post(`api/register`, body)
		.then((res) => {
			console.log('ini res =>', res);
			const decoded = jwt_decode(res.data.data.token);
			dispatch(signIn(decoded));
		})
		.catch((err) => {
			console.log(err);
		});
};

export const signIn = (payload) => {
	return {
		type: SIGN_IN,
		payload,
	};
};

export const setToken = (token) => {
	return {
		type: SET_TOKEN,
		token,
	};
};

export const postSignIn = (body) => (dispatch) => {
	axios
		.post(`api/login`, body)
		.then((res) => {
			console.log('ini res =>', res);
			// const decoded = jwt_decode(res.data.data.token);
			dispatch(signIn(res.data.data));
			// localStorage.setItem('userData', JSON.stringify(decoded));
			dispatch(setToken(res.data.data.token));
			localStorage.setItem('token', res.data.data.token);
		})
		.catch((err) => {
			console.log("ini erornya", err.response.data.message);
			dispatch({
				type: MESSAGE_ERROR,
				payload: err.response.data.message,
			})
		});
};

export const onBoardingData = (payload) => {
	return {
		type: SET_BOARDING,
		payload,
	};
};

export const putBoardingData = (token, body) => async (dispatch) => {
	console.log('boarding', token);
	const config = {
		headers: { Authorization: token },
	};
	axios
		.put(`api/login/update`, body, config)
		.then((res) => {
			console.log('ini res =>', res);
			dispatch(onBoardingData(res.data.data));
		})
		.catch((err) => {
			console.log(err);
		});
};

export const signOut = () => (dispatch) => {
	dispatch({
		type: SIGN_OUT,
		payload: localStorage.removeItem('token'),
	});
};

// export const setDataToken = () => (dispatch) => {
// 	dispatch({
// 		type: SET_TOKEN,
// 		payload: localStorage.getItem('token'),
// 	});
// };

export const uploadImage = (token, body) => (dispatch) => {
	const config = {
		headers: { Authorization: token, 'Content-Type': 'multipart/form-data' },
	};
	console.log('coba', axios);
	axios
		.post(`api/upload`, body, config)
		.then((res) => {
			dispatch({
				type: UPLOAD_IMAGE,
				payload: res.data.data,
			});
		})
		.catch((err) => {
			console.log(err);
		});
};
