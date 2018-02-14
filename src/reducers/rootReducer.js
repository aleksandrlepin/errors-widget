import { combineReducers } from 'redux';
import reports from './errorsReducer';

const rootReducer = combineReducers({
  reports
});

export default rootReducer;