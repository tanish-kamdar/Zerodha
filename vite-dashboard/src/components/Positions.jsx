import React from "react";
import { positions } from "../../data/data";

const Positions = () => {
  return (
    <>
      <h3 className="title">Positions (2)</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {positions.map((stock,index)=>{
                      const currValue=stock.price*stock.qty;
                      const isProfit=(currValue-(stock.avg*stock.qty))>=0.0;
                      const profitClass=isProfit ? "profit" : "loss";
                      const dayClass=stock.isLoss ? "loss" : "profit";
                      return  <tr>
                      <td>{stock.product}</td>
                       <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg}</td>
                      <td>{stock.price}</td>
                      <td className={profitClass}>{stock.net}</td>
                      <td className={dayClass}>{stock.day}</td>
                    </tr>;
                    })}
        </table>
      </div>
    </>
  );
};

export default Positions;
