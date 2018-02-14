import * as types from '../actions/actionTypes';
import initialState from './initialState';

const errorsReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.LOADING_REPORTS:
      return { ...state, ...action.payload };
    case types.LOAD_ERRORS_SUCCESS:
      return { ...state, ...action.payload };
    case types.LOAD_WARNINGS_SUCCESS:
      return { ...state, ...action.payload };
    case types.SET_REPORT_OPRIONS:
      return { ...state, ...action.payload }
    case types.SET_REPORT_TYPE:
      return { ...state, ...action.payload }
    default:
      return state;
  }
}

export default errorsReducer;