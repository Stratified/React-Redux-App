import axios from 'axios';
import { NEW_PICTURE } from '../reducers/rootReducer';

export const newPicture = () => (dispatch) => {
	dispatch({ type: NEW_PICTURE });

	axios
		.get(
			`https://randomfox.ca/floof/images/${Math.floor(
				Math.random() * 1000
			)}.jpg`
		)
		.then((res) => {
			dispatch({ payload: res.data });
		});
};
