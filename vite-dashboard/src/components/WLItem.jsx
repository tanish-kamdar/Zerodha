import React, { useContext, useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown, BarChartOutlined, MoreHoriz } from "@mui/icons-material";
import GeneralContext from "./GeneralContext";
function WLItem({ stock }) {
  let [beingHovered, setBeingHovered] = useState(false);
  let activateActions = () => {
    setBeingHovered(true);
  };
  let deactivateActions = () => {
    setBeingHovered(false);
  };

 
  return (
    <div
      className="item border border-start-0 border-end-0 py-1"
      onMouseEnter={activateActions}
      onMouseLeave={deactivateActions}
    >
      <p className={stock.isDown ? "ps-2 down" : "  ps-2 up"}>{stock.name}</p>
      <div className="itemInfo text-start">
        <span className="percent">{stock.percent}</span>
        {stock.isDown ? (
          <KeyboardArrowDown className="down" />
        ) : (
          <KeyboardArrowUp className="up " />
        )}
        <span className="price mx-3 text-end">{stock.price}</span>
      </div>
      {beingHovered && <Actions uid={stock.name}/>}
    </div>
  );
}
function Actions({ uid }) {
  const generalContext=useContext(GeneralContext);

   function handleBuyClick(){
    console.log(`handleBuyClick triggered`);
    generalContext.openBuyWindow(uid);
  }

  return (
    <span className="actions text-end mt-1">
      <span>
        <Tooltip title="Buy(B)" placement="top" arrow onClick={handleBuyClick}>
          <button className="buy">Buy</button>
        </Tooltip>
      </span>
      <span>
      <Tooltip title="Sell(S)" placement="top" arrow>
        <button className="sell">Sell</button>
      </Tooltip>
      </span>
      <span className="border">
      <Tooltip title="Chart" placement="top" arrow>
        <button className="action">
        <BarChartOutlined className="icon"/>
        </button>
      </Tooltip>
      </span>
      <span>
      <Tooltip title="More" placement="top" arrow>
        <button className="action">
        <MoreHoriz className="icon" />
        </button>
      </Tooltip>
      </span>
    </span>
  );
}
export default WLItem;
