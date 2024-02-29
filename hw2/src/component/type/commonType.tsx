//mycontext.tsx
export type StateType = {
    userid:string;
    username:string;
    isLogon:boolean;
    callBack:(param:boolean)=>void;
}

//mycontext.tsx
export type LogonAction =
{type:"RESET", value:StateType}
|{type:"LOGON", value:StateType}
|{type:"LOGOUT", value:StateType}