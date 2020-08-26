import axios from 'axios';
import {
	NEW_PICTURE,
	GET_NEW_PICTURE,
	GET_NEW_PICTURE_SUCCESS,
} from '../reducers/rootReducer';

const headers = {
	Accept: 'application/json/image/*',
};

export const newPicture = () => (dispatch) => {
	dispatch({ type: GET_NEW_PICTURE });
	console.log('newPicture dispatch.');

	axios
		.get(`https://cors-anywhere.herokuapp.com/https://randomfox.ca/floof`, {
			headers: headers,
		})
		.then((res) => {
			console.log(res);
			dispatch({ type: GET_NEW_PICTURE_SUCCESS, payload: res.data.image });
		})
		.catch((err) => console.log(err));
};
