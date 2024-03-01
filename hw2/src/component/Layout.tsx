import { useContext, useEffect } from "react";
import { AppContext, getStateFromLocalStorage } from "./mycontext";
import { useNavigate, Outlet } from "react-router-dom";
import './css/Layout.css';

function Layout() {
    let context = useContext(AppContext);
    let navigate = useNavigate();

    let logout = () => {
        context.dispatch({
            type: "LOGOUT",
            value: {
                userid: "",
                username: "",
                isLogon: false,
                callBack: (param: boolean): void => { }
            }
        });
        setTimeout(() => {
            navigate("/", {})
        }, 1000);  //페이지 이동 
    }

    useEffect(() => {
        const controller = new AbortController();
        context.state = getStateFromLocalStorage("appState");

        return () => {
            console.log("마지막 정리작업을 하고 나간다");
            controller.abort(); 
        }
    }, [context.state]);

    return (
        <div className="layout-container">
            <header>
                <h1>Hanaro Album</h1>
                {context.state.isLogon && (
                    <div className="user-info-container">
                        <h3>{context.state.userid}</h3>
                        <h3>{context.state.username}</h3>
                        <button type="button" onClick={logout}>Log Out</button>
                    </div>
                )}
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>&copy; 2024 Hanaro Album. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Layout;
