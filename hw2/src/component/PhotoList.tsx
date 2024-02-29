import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { AppContext, getStateFromLocalStorage } from "./mycontext";
import axios from "axios";
import { PhotoType } from "./type/commonType";
import ImageList from "./ImageList";

function PhotoList() {
    let location = useLocation();
    let { id } = location.state; // 선택한 사진 목록 id
    let [photoItems, setPhotoItems] = useState<PhotoType[]>([]);
    const [userid, setUserid] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const navigate = useNavigate();

    let context = useContext(AppContext);
    useEffect(() => {
        const controller = new AbortController();
        context.state = getStateFromLocalStorage("appState");
        let { userid, username } = context.state;
        setUserid(userid);
        setUsername(username);

        let url = "https://jsonplaceholder.typicode.com/photos?albumId=" + id;
        console.log(url);
        axios.get(url, { signal: controller.signal })
            .then((res) => {
                console.log(res.data[0]);
                setPhotoItems(res.data);
            })
            .catch((error) => {
                console.log(error);
            });

        return () => {
            console.log("마지막 정리작업을 하고 나간다");
            controller.abort();
        }
    }, [id]);

    const buttonClick = () => {
        // Navigate back to the previous page
        navigate(-1);
    };

    return (
        <div>
            <h1>photoList</h1>
            <h3>유저번호: {userid}</h3>
            <h3>유저이름: {username}</h3>
            <h3>앨범번호: {id}</h3>
            <ImageList images={photoItems} />
            <button type='button' onClick={buttonClick}>뒤로가기</button>
        </div>
    );
}

export default PhotoList;
