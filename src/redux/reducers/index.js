import { combineReducers } from 'redux';
import stocksReducer from './stocks';
import stockSummary from './stockSummary'

export default combineReducers({
  stocks: stocksReducer,
  stockSummary: stockSummary
});
