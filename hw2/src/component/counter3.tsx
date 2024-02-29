import { useReducer, useState } from "react";
import { myStateReducer } from "./reducer/myreducer";
import { MyState, CounterAction } from './type/commonType';

/*
    reducer => 현재상태와 액션(함수)객체를 받아와서 새로운 상태를 반환한다
    function(currentState, action)
    {
        //현재 상태에 action을 가하여 새로운 상태를 만들어서 새로운 상태값을
        반환한다 
        return newState
    }

    사용목적 : 상태와 함수를 분리해서 처리하기 위해 주로 redux라이브러리가 
    이렇게 구축되어 있다.
    컴포넌트간에 깊이가 계속되면  부모컴포넌트는 자식컴포넌트에게 계속해서 
    대대손손 props를 전달해야 하고 자식컴포넌트는 부모 컴포넌트의 함수를 
    호출하면서 부모에게 도달해야 한다. 
    컴포넌트 구조가 아주 복잡할 경우에는 이 방법으로 의사전달을 하기 어렵다
    그래서 모두가 사용하는 공통공간에 함수를 두고 이 함수를 직접 호출하게 한다  
*/

// //reducer에게 초기상태를 전달해 주어야 한다.  
//const initialState:MyState -변수선언문 
//{count:0} - 초기값 



//reducer한테 전달할 함수를 만들자 
//매개변수는 앞에 이전 state, 뒤에 함수, 반환값이 새로운 state이어야 한다 
//typescript 에서 함수를 선언할때 매개변수도 타입이 있어야 하지만 
//반환타입도 지정을 해야한다. 
//다른곳으로 분리시키기 

function Counter3() {
    const initialState:MyState = {count:0};

    //const [number, setNumber] = useState<MyState>({count:0});
    const [status, dispatch] = useReducer(myStateReducer, initialState);
    //useReducer함수가 매개변수 reducer함수랑 초기상태를 받아가서 
    //새로운 스테이트와 함수의 주소를 반환함 - 배열형태로 

    //앞에가 상태정보 , dispatch 함수임 
    //StateReducer 를 dispatch를 써서 호출해라라는 의미임 

    //useReducer를 써서 함수 두개를 외부로 내보내려고 한다 
    //increase와 decrease가 백앤드와 통신을 한다면 
    //각 컴포넌트마다 통신을 담당할 코드가 엄청 많다 
    //이걸 한곳에 몰아서 처리를 해줄 수 있다 
    const increase = ()=>{ dispatch({type:"increase"}) }
    const decrease = ()=>{ dispatch({type:"decrease"}) }
    const reset = ()=>{ dispatch({type:"reset"}) }
    const add = ()=>{ dispatch({type:"add", count:5}) }

    return (<div>
        <h1>현재 카운트 : {status.count}</h1>
        <button type="button" onClick={increase}>++</button>
        <button type="button" onClick={decrease}>--</button>
        <button type="button" onClick={reset}>초기화</button>
        <button type="button" onClick={add}>+5</button>
    </div>);
}

export default Counter3;