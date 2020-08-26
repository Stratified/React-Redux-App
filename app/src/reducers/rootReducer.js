const initialState = {
	image: 'https://randomfox.ca/images/10.jpg',
	loading: false,
};

export const NEW_PICTURE = 'NEW_PICTURE';

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case NEW_PICTURE:
			return { ...state, image:  };
		default:
			return state;
	}
};

export default rootReducer;
