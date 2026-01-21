import { useState } from "react";
import { createContext } from "react";
import BuyActionWindow from "./BuyActionWindow.jsx";
import SellActionWindow from "./SellActionWindow.jsx";
const GeneralContext=createContext({
    openBuyWindow : (uid)=>{},
    closeBuyWindow : ()=>{},
    openSellWindow : (uid)=>{},
    closeSellWindow : ()=>{},
});

export function GeneralContextProvider(props){
    const [isBuyWindowOpen,setIsBuyWindowOpen]=useState(false);
    const [isSellWindowOpen,setIsSellWindowOpen]=useState(false);

    const [selectedStockUID,setSelectedStockUID]=useState("");

    function handleOpenBuyWindow(uid){
        console.log(`Open Buy Window triggered`);
        setIsSellWindowOpen(false);
        setIsBuyWindowOpen(true);
        setSelectedStockUID(uid);
    }

    function handleCloseBuyWindow(){
        setIsBuyWindowOpen(false);
        setSelectedStockUID("");
    }

    function handleOpenSellWindow(uid){
        setIsBuyWindowOpen(false);
        setIsSellWindowOpen(true);
        setSelectedStockUID(uid);
    }

    function handleCloseSellWindow(){
        setIsSellWindowOpen(false);
        setSelectedStockUID("");
    }

    return (<GeneralContext.Provider
    value={
        {
           openBuyWindow : handleOpenBuyWindow,
           closeBuyWindow : handleCloseBuyWindow,
           openSellWindow:handleOpenSellWindow,
           closeSellWindow:handleCloseSellWindow
        }
    }
    >
        {props.children}
        {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
        {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>);
}

export default GeneralContext;