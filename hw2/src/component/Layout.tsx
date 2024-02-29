import { useContext, useEffect, useState } from "react";
import { AppContext, getStateFromLocalStorage } from "./mycontext";
import { Outlet } from "react-router-dom";

function Layout() {
    let context = useContext(AppContext);
    const [userid, setUserid] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    useEffect(() => {
        const controller = new AbortController();
        context.state = getStateFromLocalStorage("appState");//로그온한 아이디가져오고 다른 정보 불러온다 
        //axios 로 가져와서 콘텍스트에 저장하기 
        let {userid, username} = context.state;
        setUserid(userid);
        setUsername(username);
        return () => {
            console.log("마지막 정리작업을 하고 나간다 ");
            controller.abort(); //메모리 누수 해제, 백그라운드에서 작동중인 axios등을 멈추게 할 수 있다  
        }
    }, []);
    return (
        <div>
            <h1>Layout</h1>
            <h3>유저번호 : {userid}</h3>
            <h3>유저이름 : {username}</h3>
            <Outlet />
        </div>
    );
}

export default Layout;