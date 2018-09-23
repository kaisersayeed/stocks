import { combineReducers } from 'redux';
import companyInfo from './companyInfo';
import employees from './employees'

export default combineReducers({
  companyInfo: companyInfo,
  employees: employees
});
