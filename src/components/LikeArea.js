import { useEffect, useState } from "react"


const LikeArea = () => {

    const likeJson = JSON.parse(localStorage.getItem('likeList'))
    const [likeCount, setLikes] = useState(0);

    const clearStorage = () => {
        localStorage.clear()
        window.location.reload()
    }

    useEffect(()=> {
        setLikes(likeJson ? likeJson.length : 0);
    },[])
    
    return (
        <div className="like-area">
            <div className="like-content">
                Likes: {likeCount}
            </div>
            <button className="clear-likes" onClick={()=>clearStorage()}>
                CLEAR
            </button>
        </div>
    )
}
export default LikeArea