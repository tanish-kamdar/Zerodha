import { useState } from "react";
import { createContext } from "react";
import BuyActionWindow from "./BuyActionWindow.jsx";

const GeneralContext=createContext({
    openBuyWindow : (uid)=>{},
    closeBuyWindow : ()=>{}
});

export function GeneralContextProvider(props){
    const [isBuyWindowOpen,setIsBuyWindowOpen]=useState(false);
    const [selectedStockUID,setSelectedStockUID]=useState("");

    function handleOpenBuyWindow(uid){
        console.log(`Open Buy Window triggered`);
        setIsBuyWindowOpen(true);
        setSelectedStockUID(uid);
    }

    function handleCloseBuyWindow(){
        setIsBuyWindowOpen(false);
        setSelectedStockUID("");
    }

    return (<GeneralContext.Provider
    value={
        {
           openBuyWindow : handleOpenBuyWindow,
           closeBuyWindow : handleCloseBuyWindow
        }
    }
    >
        {props.children}
        {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>);
}

export default GeneralContext;