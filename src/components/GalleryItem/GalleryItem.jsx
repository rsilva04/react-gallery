import { useState } from 'react';
import axios from 'axios';
import "./GalleryItem.css"


function GalleryItem(props) {

  const [image, setImage] = useState(false)

  const toggleImg = () => {
    setImage(!image)
  }

const likeImg = (id) => {
  axios.put(`/gallery/like/${id}`)
    .then((response) => {
    })
    .catch((error) => {
      console.log(error);
    })
}
return (
  <div class="gallery-image" onClick={() => toggleImg()}>
    <img src={props.image.path} width="400" height="400" />
    {image ? <p class="image-description">{props.image.description}</p> : null}
    <button class="like-button" onClick={() => likeImg(props.image.id)}>❤️</button>
  </div>
);

}


export default GalleryItem;
