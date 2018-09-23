import * as actionTypes from '../../constants/actionTypes';

const companyInfo = (state = {}, action)=> {
  switch (action.type) {
    case actionTypes.FETCH_COMPANY_INFO_SUCCESSFUL:
      const {companyName, companyMotto, companyEst} = action.payload;
      console.log('company info reducer ', action.payload);
      return {companyName, companyMotto, companyEst};
    case actionTypes.FETCH_COMPANY_INFO_ERROR:
      return {};
    default:
      return state;
  }
};

export default companyInfo;