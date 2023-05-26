import { useEffect, useState } from "react"
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton } from "react-share";

const ImageBox = (props) => {

    const [likeStatus, setLiked] = useState('');
    const [likeAnim, setAnim] = useState('');
    const [likeText, setLikeText] = useState('Like')


    let likeJson;
    likeJson = JSON.parse(localStorage.getItem('likeList'));
    if (!likeJson)
        likeJson = []
    else {
        
    }
    localStorage.setItem('likeList', JSON.stringify(likeJson))

    useEffect(() => {
        if (likeJson.includes(props.id)) {
            setLikeText('Liked')
            setLiked('liked')
        }
        else {
            setLikeText('Like')
            setLiked('')
        }
        
    },[likeJson])

    const handleLike = () => {
        likeJson = JSON.parse(localStorage.getItem('likeList'))
        if (likeJson.includes(props.id)) {
            likeJson.splice(likeJson.indexOf(props.id), 1)
            setAnim('')
            setLiked('')
            setLikeText('Like')
        }
        else {
            likeJson.push(props.id);
            setAnim('liked-now')
            setLikeText('Liked')
        }
        localStorage.setItem('likeList', JSON.stringify(likeJson))
        console.log(localStorage)
    }
    

    return (
        <div className="image-box">
            <img className="image" src={props.image} alt="" />
            <div className="image-items">
                <h3>{props.author}</h3>
                <div className="actions">
                    <FacebookShareButton
                        url={props.image}
                        quote={'share'}
                    ><FacebookIcon size={26} round/></FacebookShareButton>
                    <LinkedinShareButton
                        url={props.image}
                        quote={'share'}
                    ><LinkedinIcon size={26} round/></LinkedinShareButton>
                    <button className={`like-button ${likeStatus ? likeStatus : null} ${likeAnim?likeAnim:null}`}
                        onClick={() => handleLike()}
                    >
                        {likeText}
                    </button>
                </div>   
            </div>     
        </div>
    )
}
export default ImageBox;