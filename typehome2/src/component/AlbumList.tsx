//context로부터 사용자 id를 가져와서 화면에 목록을 뿌린다
//bootstrap design
import {useState, useEffect} from "react"

type ItemType = {
    id:number;
    userId:number;
    title:string;
}

const itemData:ItemType[] = [
    {id:1, userId:2, title:"제목1"},
    {id:2, userId:2, title:"제목2"},
    {id:3, userId:2, title:"제목3"},
    {id:4, userId:2, title:"제목4"},
    {id:5, userId:2, title:"제목5"}
];

function AlbumList() {
    const [items, setItems] = useState<ItemType[]>([])
    const controller = new AbortController(); //system이 제공하는 class

    //fetch, axios 사용할 때 쓸 예정이다
    useEffect(()=>{
        setItems([...itemData])
    }, [])
    
    return (
        <div>
            <ul>{items.map((item:ItemType, key:number)=><li key={key}>{item.title}</li>)}</ul>
        </div>
    );
}

export default AlbumList;
