import {
	FETCH_NOTIFICATIONS_SUCCESS,
	MARK_AS_READ_SUCCESS,
} from '../actions/types';

const initialState = {
	data: null,
	error: null,
	status: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_NOTIFICATIONS_SUCCESS:
			return {
				...state,
				data: action.payload,
				status: 'success',
			};
		default:
			return {
				...state,
			};
	}
};
