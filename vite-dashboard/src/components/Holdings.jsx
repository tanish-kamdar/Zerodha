import React from "react";
import { useEffect } from "react";
// import { holdings } from fetch('http://localhost:3001/holdings');
import { useState } from "react";
import axios from "axios";
import BarChart from "./BarChart";
import api from "../../util/api";

const Holdings = () => {
  let [holdings, updateHoldings] = useState([]);
  useEffect(() => {
    api.get("/holdings").then((res) => {
      
      if(!res.data.holdings){
        updateHoldings([]);
        return;
      }
      let fetchedHoldings = res.data.holdings;
      updateHoldings(fetchedHoldings);
    });
  },[]);
let labels = holdings.map((holding) => holding.name);
 let data = {
   labels,
   datasets: [
     {
       label: 'Stock Value',
       data: holdings.map((holding) => holding.qty*holding.price),
       backgroundColor: 'rgb(33, 150, 243)',
     }
   ],
 };
  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <td>Instrument</td>
              <td>Qty.</td>
              <td>Avg. cost</td>
              <td>LTP</td>
              <td>Cur. val</td>
              <td>P&L</td>
              <td>Net chg.</td>
              <td>Day chg.</td>
            </tr>
          </thead>
          <tbody>
            {holdings.map((stock, key) => {
              const currValue = stock.price * stock.qty;
              const isProfit = currValue - stock.avg * stock.qty >= 0.0;
              const profitClass = isProfit ? "profit" : "loss";
              stock.dayProfit = stock.dayProfit ? stock.dayProfit : isProfit;
              const dayClass = stock.dayProfit ? "profit" : "loss";
              return (
                <tr key={stock._id}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg}</td>
                  <td>{stock.price}</td>
                  <td>{currValue.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(currValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profitClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <BarChart data={data}/>
    </>
  );
};

export default Holdings;
