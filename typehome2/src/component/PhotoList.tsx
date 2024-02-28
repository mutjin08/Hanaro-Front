import {useContext, useEffect, useState} from "react";
import {useLocation, useSearchParams} from "react-router-dom";
import { AppContext, getStateFromLocalStorage } from "./mycontext";
import axios from "axios";

//https://jsonplaceholder.typicode.com/photos?albumId=20
type PhotoType =   {
    "albumId": number,
    "id": number,
    "title": string,
    "url": string,
    "thumbnailUrl": string
}

function PhotoList() {
    let location = useLocation();
    let {id} = location.state;
    let [photoItems, setPhotoItems] = useState<PhotoType[]>([]);

    let context = useContext(AppContext);
    useEffect(()=>{
        const controller = new AbortController(); //객체가 여기서 만들어져야 한다 
        //************************************* */
        context.state = getStateFromLocalStorage("appState");//로그온한 아이디가져오고 다른 정보 불러온다 
        //axios 로 가져와서 콘텍스트에 저장하기
        let {userid, username} = context.state;
        let url = "https://jsonplaceholder.typicode.com/photos?albumId="+id;
        console.log( url );
        axios.get(url, {signal:controller.signal})
        .then( (res)=>{
            console.log(res.data[0]);
            setPhotoItems(res.data);
        })
        .catch(( error)=>{
            console.log( error );
        });
        
        return ()=>{
            console.log( "마지막 정리작업을 하고 나간다 ");
            controller.abort(); //메모리 누스 해제, 백그라운드에서 작동중인 
            //axios등을 멈추게 할 수 있다  
        }
        //setItems([...itemData]);//axios로 데이터 가져와서 출력하기 
    }, []);
    
    return (
        <div>

        </div>
    );
}

export default PhotoList;