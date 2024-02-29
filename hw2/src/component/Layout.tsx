import { useContext } from "react";
import { AppContext } from "./mycontext";
import { Outlet } from "react-router-dom";

function Layout() {
    let context = useContext(AppContext);
    return (
        <div>
            <h1>Layout</h1>
            <h3>유저번호 : {context.state.userid}</h3>
            <h3>유저이름 : {context.state.username}</h3>
            <Outlet />
        </div>
    );
}

export default Layout;