import { useState, useEffect } from 'react';
import axios from 'axios';
import "./GalleryItem.css"
import fetchGallery from '../App/functions/getGallary';


function GalleryItem(props) {
  const [image, setImage] = useState()
  const [likeCount, setLikeCount] = useState(0)

  useEffect(() => {
    // This will run onload and if a dependancy changes
    fetchGallery()
    setLikeCount(props.image.likes)
    //dependancy
  },[setLikeCount, fetchGallery, props.image.likes])

  const toggleImg = () => {
    setImage(!image)
  }

  const likeImg = (id) => {
    //Calling for like update by id
    axios.put(`/gallery/like/${id}`)
      .then((response) => {
        //If response is 200 call for new data
        if (response === 200) fetchGallery()
      })
      .catch((error) => {
        console.log(error);
      })
      // Add 1 to like to keep local state updated
      setLikeCount(props.image.likes ++)
  }

  return (
    <div className="gallery-image" onClick={() => toggleImg()}>
      <img src={props.image.path} width="400" height="400" />
      {image ? <p className="image-description">{props.image.description}</p> : null}
      <button className="like-button" onClick={() => likeImg(props.image.id)}>❤️</button>
      <div>{likeCount}</div>
    </div>
  );

}


export default GalleryItem;