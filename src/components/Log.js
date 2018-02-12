import React from 'react';

const Log=(props)=> {
  return props.stocksLogList.map((stocksLogListData)=>{
    return (
      <div key={stocksLogListData.updatedAt}>
        <span className="title"> Updated at {stocksLogListData.updatedAt}
        </span>
        {renderStocksLogListItem(stocksLogListData)}
      </div>
    );
  });
};

const renderStocksLogListItem=(stocksLogListData)=> {
  return (
    <ul>
      {stocksLogListData.stockData.map((item)=>{
        return <li key={item.code}> {item.code}: {item.price}</li>
      })}
    </ul>
  );
};

export default Log;