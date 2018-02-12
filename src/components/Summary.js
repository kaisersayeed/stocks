import React from "react";

const Summary =(props)=> (
  <div className="right-content">
    <h1> Summary </h1>

    <table>
      <thead>
       <tr>
        <th>Stock</th>
        <th>Starting</th>
        <th>Lowest</th>
        <th>Highest</th>
        <th>Current</th>
       </tr>
      </thead>
      <tbody>
       {renderStockSummary(props)}
      </tbody>
    </table>
  </div>
);

const renderStockSummary =(props)=> {
  return props.stockSummary.map((stockSummary)=>{
    return (
      <tr key={stockSummary.code}>
        <td>{stockSummary.code}</td>
        <td>{stockSummary.startingPrice}</td>
        <td>{stockSummary.lowestPrice}</td>
        <td>{stockSummary.highestPrice}</td>
        <td>{stockSummary.currentPrice}</td>
      </tr>
    )
  })
};

export default Summary;


