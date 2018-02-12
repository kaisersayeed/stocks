import * as actionTypes from '../../constants/actionTypes';
import {INTERRUPT_BUTTON_PAUSE} from '../../constants/appConstant';

const initialState = {
  interruptButtonText: INTERRUPT_BUTTON_PAUSE,
  stocksLogList: []
};

const stocks = (state = initialState, action)=> {
  switch (action.type) {
    case actionTypes.FETCH_STOCKS_LOG:
      if(state.interruptButtonText === INTERRUPT_BUTTON_PAUSE) {
        return {
          interruptButtonText: state.interruptButtonText,
          stocksLogList: [
            {updatedAt: new Date().toTimeString(),
              stockData: action.payload.data}, ...state.stocksLogList
          ]
        };
      } else {
        return state;
      }

    case actionTypes.TOGGLE_INTERRUPT_BUTTON_TEXT:
      return {
        interruptButtonText: action.payload,
        stocksLogList: state.stocksLogList
      };
    default:
      return state;
  }
};

export default stocks;