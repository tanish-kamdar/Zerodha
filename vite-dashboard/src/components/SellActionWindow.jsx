import "./BuyActionWindow.css";

import GeneralContext from "./GeneralContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./SellActionWindow.css"
import { useEffect } from "react";

import api from "../../util/api";

export default function SellActionWindow({uid}) {
    const [stockPrice,setStockPrice]=useState(0.0);
    const [stockQuantity,setStockQuantity]=useState(1);
    const generalContext=useContext(GeneralContext);
    const [qty,setQty]=useState(undefined);

    useEffect(()=>{
      async function fetchHoldings() {
        let result=await api.get(`http://localhost:3001/holdings/${uid}/qty`);
        let documents=result.data;
        let quantity=documents.reduce((sum,doc)=>sum+doc.qty,0);
        setQty(quantity);
      }
      fetchHoldings();
  });

    async function handleSellClick(){
        
        api.post("http://localhost:3001/order", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
        },{
          withCredentials: true,
        });
        console.log(`Sell Order placed`);

        generalContext.closeSellWindow();
    }

    function handleCancelClick(){

        generalContext.closeSellWindow();
    }

    return ( <div className="container" id="buy-window" draggable='true'>
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>
      {stockQuantity>qty && <p style={{color:"red"}}>Quantity available to sell : {qty}</p>}
      <div className="buttons">
        <p className="">Margin required 0</p>
        
        <div>
          <Link className="btn btn-red" onClick={stockQuantity<=qty && stockQuantity>0 && handleSellClick }>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div> );
}
