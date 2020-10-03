import initialState from "../initialState";
import {
  SUBMIT_LISTING_START,
  SUBMIT_LISTING_SUCCESS,
  SUBMIT_LISTING_ERROR,
} from "../../constants/action-types/submitListing";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SUBMIT_LISTING_START:
      return {
        ...state,
        ...state,
        loading: true,
      };
    case SUBMIT_LISTING_SUCCESS:
      return {
        ...state,
        ...state,
        loading: false,
        error: null,
        data: payload,
      };
    case SUBMIT_LISTING_ERROR:
      return {
        ...state,
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
