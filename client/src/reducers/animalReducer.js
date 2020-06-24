import {
	SET_LOADING,
	GET_ANIMALS,
	ERROR,
	CLEAR_ERRORS
} from '../actions/types';


const initialState = {
	animals: null,
	loading: false,
	error: null
}

export default (state = initialState, action) => {
	switch(action.type){
		case SET_LOADING: 
			return {
				...state,
				loading: true
			}
		case GET_ANIMALS:
			return{
				...state,
				animals: action.payload,
				loading: false
			}
		case ERROR: 
			return{
				...state,
				error: action.payload,
				loading: false
			}
		case CLEAR_ERRORS:
			return{
				...state,
				error: null
			}
		default:
			return state;
	}
}
