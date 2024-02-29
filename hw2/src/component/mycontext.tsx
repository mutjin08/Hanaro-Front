import { Dispatch, createContext, useReducer } from "react";
import { StateType, LogonAction } from "./type/commonType";

const initialState:StateType={userid:"", username:"", isLogon:false, callBack:(param:boolean)=>null}

const saveStateToLocalStorage = (key:string, state:any) => {
    localStorage.setItem(key, JSON.stringify(state))
}

const getStateFromLocalStorage = (key:string) => {
    const savedState = localStorage.getItem(key);
    return savedState?JSON.parse(savedState):{};
}

function LogonReducer(state:StateType, action:LogonAction){
    switch(action.type){
        case "LOGON":{
            let newState = {...state, userid:action.value.userid, username:action.value.username, isLogon:true};
            console.log(newState);
            saveStateToLocalStorage("appState", newState);
            return newState;
        }
        case "LOGOUT":{
            let newState = {...state, userid:"", username:"", isLogon:false};
            saveStateToLocalStorage("appState", newState);
            return newState;
        }
        case "RESET":{
            return initialState;
        }
        default:{
            throw new Error("알 수 없는 액션입니다");
        }
    }
}

const AppContext = createContext
<{state:StateType, dispatch:Dispatch<LogonAction>}>
({state:initialState, dispatch:()=>null})

const AppProvider = ({children}:{children:any}) => {
    const [state, dispatch] = useReducer(LogonReducer, initialState);
    return(
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider, saveStateToLocalStorage, getStateFromLocalStorage};