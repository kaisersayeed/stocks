import * as actionTypes from '../../constants/actionTypes';

const fetchStocksSummary = (stocks, existingStocksSummary)=> {
  if(existingStocksSummary.length > 0) {
    return stocks.map((stock)=> {
      const existingStock = existingStocksSummary.find(stockSummary=> stock.code === stockSummary.code);
      return {
        code: stock.code,
        startingPrice: existingStock.startingPrice,
        currentPrice: stock.price,
        lowestPrice: stock.price < existingStock.lowestPrice ?
            stock.price : existingStock.lowestPrice,
        highestPrice: stock.price > existingStock.highestPrice ?
            stock.price : existingStock.highestPrice
      };
    });
  } else {
    return stocks.map((stock)=>{
      return {
        code: stock.code,
        startingPrice: stock.price,
        currentPrice: stock.price,
        lowestPrice: stock.price,
        highestPrice: stock.price
      };
    });
  }
};


const stockSummary = (state = [], action)=> {
  switch (action.type) {
    case actionTypes.FETCH_STOCKS_SUMMARY:
      return fetchStocksSummary(action.payload.data, state);
    default:
      return state;
  }
};

export default stockSummary;