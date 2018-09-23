import * as actionTypes from '../../constants/actionTypes';

const companyInfo = (state = [], action)=> {
  switch (action.type) {
    case actionTypes.FETCH_EMPLOYEES_SUCCESSFUL:
      return [...action.payload];
    case actionTypes.FETCH_EMPLOYEES_ERROR:
      return [];
    default:
      return state;
  }
};

export default companyInfo;