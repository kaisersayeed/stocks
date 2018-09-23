import * as actionTypes from '../../constants/actionTypes';
import axios from 'axios';
import {fetchCompanyInfoFromData, fetchEmployeesFromData} from '../../services/EmployeeRoasteringService';

export const fetchStocks=()=> {
  const request = axios.get('/api/stock-pricing');
  return (dispatch)=> {
    request.then((data)=> {
      dispatch({type: actionTypes.FETCH_STOCKS_LOG, payload: data});
      dispatch({type: actionTypes.FETCH_STOCKS_SUMMARY, payload: data});
    });
  };
};

export const fetchCompanyInfo=()=> {
  const companyInfoPromise = fetchCompanyInfoFromData();
  return (dispatch)=> {
    companyInfoPromise.then((data)=> {
      dispatch({type: actionTypes.FETCH_COMPANY_INFO_SUCCESSFUL, payload: data});
    }).catch((error)=>{
      dispatch({type: actionTypes.FETCH_COMPANY_INFO_ERROR, payload: error});
    });
  };
};

export const fetchEmployees=()=> {
  const employeesPromise = fetchEmployeesFromData();
  return (dispatch)=> {
    employeesPromise.then((data)=> {
      console.log('called ', data);
      dispatch({type: actionTypes.FETCH_EMPLOYEES_SUCCESSFUL, payload: data});
    }).catch((error)=>{
      dispatch({type: actionTypes.FETCH_EMPLOYEES_ERROR, payload: error});
    });
  };
};

export const interruptButtonClicked=(buttonText)=> {
  return (dispatch)=>{
    dispatch({type: actionTypes.TOGGLE_INTERRUPT_BUTTON_TEXT,
      payload: buttonText});
  };
};