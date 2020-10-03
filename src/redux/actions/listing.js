import dotenv from 'dotenv';
import { SUBMIT_LISTING_SUCCESS, SUBMIT_LISTING_ERROR, SUBMIT_LISTING_START } from '../../constants/action-types/submitListing';
import { toast } from 'react-toastify';



dotenv.config();


export const saveListing = (formData, history) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: SUBMIT_LISTING_START
            });
            const res = await fetch('https://bongalo-api.herokuapp.com/api/accommodation/new', { method: 'post', body: JSON.stringify(formData) });
            dispatch({
                type: SUBMIT_LISTING_SUCCESS,
                payload: res.data
            });
            history.push("/");
            toast.success('Property listed successfully');
        } catch (error) {
            if (error?.response?.data) {
                dispatch({ type: SUBMIT_LISTING_ERROR, payload: error.response.data });
                toast.error(error.response.data.error);
            } else if (error.message) {
                dispatch({ type: SUBMIT_LISTING_ERROR, payload: error.message });
                toast.error(error.message);
            } else {
                console.error('Internal error', error)
            }
        }
    }
}
