import * as actionTypes from '../../constants/actionTypes';
import axios from 'axios';

export const fetchStocks=()=> {
  const request = axios.get('/api/stock-pricing');
  return (dispatch)=> {
    request.then((data)=> {
      dispatch({type: actionTypes.FETCH_STOCKS_LOG, payload: data});
      dispatch({type: actionTypes.FETCH_STOCKS_SUMMARY, payload: data});
    });
  };
};

export const interruptButtonClicked=(buttonText)=> {
  return (dispatch)=>{
    dispatch({type: actionTypes.TOGGLE_INTERRUPT_BUTTON_TEXT,
      payload: buttonText});
  };
};