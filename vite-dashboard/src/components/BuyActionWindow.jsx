import "./BuyActionWindow.css";

import GeneralContext from "./GeneralContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import api from "../../util/api";
export default function BuyActionWindow({uid}) {
    const [stockPrice,setStockPrice]=useState(0.0);
    const [stockQuantity,setStockQuantity]=useState(1);
    const generalContext=useContext(GeneralContext);

    function handleBuyClick(){

        api.post("http://localhost:3001/order", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
        },{
        withCredentials: true,
        });

        generalContext.closeBuyWindow();
    }

    function handleCancelClick(){

        generalContext.closeBuyWindow();
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

      <div className="buttons">
        <span>Margin required {stockPrice*stockQuantity}</span>
        <div>
          <Link className="btn btn-blue" onClick={stockQuantity>0 && handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div> );
}
