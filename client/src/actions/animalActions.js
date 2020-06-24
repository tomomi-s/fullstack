import {
	SET_LOADING,
	GET_ANIMALS,
	ERROR,
	CLEAR_ERRORS
} from './types';

import axios from 'axios';

export const getAnimails = () => async dispatch => {
	try{
		clearErrors();
		const animals = await axios('/animals')
		dispatch({
			type: GET_ANIMALS,
			payload: animals.data
		})
	}catch(err){
		console.log(err)
		dispatch({
			type: ERROR,
			payload: "Something went wrong."
		})
	}
}

// Set loading to true
export const setLoading = () => {return {type: SET_LOADING}}

//Clear Errors
export const clearErrors = () => {
	return{type: CLEAR_ERRORS}
}