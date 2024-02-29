//이미지를 grid로 뿌리는 작업을 진행한다. 
//grid, flex를 써야 횡으로 컴포넌트 배치가 가능하다 <li> </li>나 테이블로 하면 코드가 
//복잡해진다. 

import { PhotoType } from "./type/commonType";
import '../ImageList.css';
function ImageList({ images }: { images: PhotoType[] }) {

    return (
        <div className="image-grid">
            <h1>ImageList</h1>
            {
                images.map((item: PhotoType) => {
                    return (
                        <img src={item.thumbnailUrl} style={{ "width": "100px" }} />
                    )
                })
            }
        </div>
    );
}

export default ImageList;