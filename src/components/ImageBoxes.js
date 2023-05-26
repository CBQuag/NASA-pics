import { useEffect, useState } from "react";
import ImageBox from "./ImageBox";

const ImageBoxes = () => {

    const url='https://picsum.photos/v2/list'

    const [picData, setData] = useState([]);
    
    useEffect(()=>{
        getImages()
    },[])


    const getImages = () => {
        fetch(`${url}`)
            .then(res => res.ok ? res.json() : null)
            .then(data => {
            console.log(data)
                setData(data)
        })
    }

    return (
        <div>
            <div className="image-box-area">
            {picData ? picData.map(content => (<ImageBox
                key={content.id}
                id={content.id}
                author={content.author}
                image={content.download_url}/>)) : null}
            </div>
        </div>
        
    )
}
export default ImageBoxes;