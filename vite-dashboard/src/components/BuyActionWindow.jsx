import "./BuyActionWindow.css";

import {GeneralContext} from GeneralContext;

import axios from 'axios';

function BuyActionWindow(uid) {
    const [stockPrice,setStockPrice]=useState(0.0);
    const [stockQuantity,setStockQuantity]=useState(1);

    function handleBuyClick(){

        axios.post("http://localhost:3001/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
        });

        GeneralContext.closeBuyWindow();
    }

    function handleCancelClick(){

        GeneralContext.closeBuyWindow();
    }

    return ( <div className="container" id="buy-window" draggable="true">
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
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div> );
}

export default BuyActionWindow;