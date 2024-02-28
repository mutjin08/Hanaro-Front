/*

*/
import { useState } from "react";
import {PhotoType} from "./type/commonType";

function ImageList({images}:{images:PhotoType[]}) {
    //const [images, setImages] = useState<PhotoType[]>([]);
    return (
        <div>
            {
                images.map((item:PhotoType) => {
                    return(<img src={item.thumbnailUrl} style={{"width":"150px"}}></img>)
                })
            }
        </div>
    );
}

export default ImageList;