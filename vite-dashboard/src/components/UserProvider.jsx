import { useReducer } from "react";
import { initialState, userReducer } from "./userReducer";
import { createContext } from "react";
import { useEffect } from "react";

export const UserContext=createContext();
export default function UserProvider({children}) {
    const [state,dispatch]=useReducer(userReducer,initialState);
    useEffect(()=>{
        console.log('Latest User State : ',state);
    },[state]);
    return ( <UserContext.Provider value={{state,dispatch}}>
    {children}
    </UserContext.Provider> );
}
