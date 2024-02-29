import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./mycontext";
import axios from 'axios';

function Logon() {
    let navigate = useNavigate();

    let context = useContext(AppContext);
    const [userid, setUserid] = useState<string>("");
    const [msg, setMsg] = useState<string>("");

    let onChange = (e: any) => {
        setUserid(e.target.value);
    }

    let logon = () => {
        if (parseInt(userid) >= 1 && parseInt(userid) <= 10) {
            let url = "https://jsonplaceholder.typicode.com/users?id=" + userid;
            axios.get(url)
                .then((res) => {
                    console.log(res.data);
                    let username = res.data[0].username;
                    console.log(username);

                    context.dispatch({
                        type: "LOGON", 
                        value: {
                            userid: userid,
                            username: username, 
                            isLogon: true, 
                            callBack: (param: boolean): void => {}
                        }
                    });

                    setTimeout(() => { navigate("/album/list", {}) }, 1000);  //페이지 이동 
                    setMsg("");
                })
                .catch(error => {
                    console.log(error);
                });
        }
        else {
            context.dispatch({ type: "LOGOUT", value: { userid: "", username: "", isLogon: false, callBack: (param: boolean): void => {} } });
            setMsg("User ID는 1~10번만 가능합니다.");
            console.log(context.state.userid);
        }

    }

    return (<div>
        <h1>Logon</h1>
        <input type="text" id="userid" onChange={onChange} value={userid} placeholder="User ID" />
        <button type="button" onClick={logon}>Sign In</button>
        <h3 style={{ "color": "red" }}>{msg}</h3>
    </div>);
}

export default Logon;

