import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Page2() {
    let location = useLocation();
    let navigate = useNavigate();

    const goForward = () => {}
    const goBackward = () => {
        //받아왔던 데이터를 그대로 다시 넘긴다
        navigate("/page1", {state:location.state})

        //-1을 사용하면 이전으로 돌려놓기만 하고, state 전달을 하지 않는다.
        //navigate(-1, {state:location.state})
    }

    useEffect(()=>{
        console.log(location);
    }, [])

    return (
        <div>
            <h1>Page2</h1>
            <h3>{location.state.username}</h3>
            <button type="button" onClick={goBackward}>뒤로...(page1)</button>&nbsp;
            <button type="button" onClick={goForward}>앞으로!!!</button>&nbsp;
        </div>
    );
}

export default Page2;