import { combineReducers } from 'redux';
import medsReducer from './medsReducer';

const reducers = combineReducers({
  markets: medsReducer,
});

export default reducers;