const initialState = {
	image: 'https://randomfox.ca/images/10.jpg',
	loading: false,
};

export const NEW_PICTURE = 'NEW_PICTURE';
export const GET_NEW_PICTURE = 'GET_NEW_PICTURE';
export const GET_NEW_PICTURE_SUCCESS = 'GET_NEW_PICTURE_SUCCESS';

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case NEW_PICTURE:
			return { ...state };
		case GET_NEW_PICTURE:
			return { ...state };
		case GET_NEW_PICTURE_SUCCESS:
			return { ...state, image: action.payload };
		default:
			return state;
	}
};

export default rootReducer;
