import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; //component change와 관련된 것

function Page1() {
    //page1 -> page2로 이동하려 한다. 상단의 메뉴가 아니라 프로그램으로 움직이고 싶다. navigate를 이용해야 한다.
    let location = useLocation();
    let navigate = useNavigate();
    
    const goForwrd = () => {
        navigate("/page2", {state:{username:"홍길동", age:23}});
    }

    useEffect(()=>{
        if(!location.state){
            console.log("...start:", location.state);
        }else{
            console.log("...~again:", location.state);
        }
        console.log("mount!!! : 다른 component가 이 component로 교체될 때");

        return ()=>{
            console.log("unmount... : 이 component가 다른 component로 교체될 때");
        }
    }, [])
    return (
        <div>
            <h1>Page1</h1>
            <button type="button" onClick={goForwrd}>앞으로!!!(page2)</button>
        </div>
    );
}

export default Page1;