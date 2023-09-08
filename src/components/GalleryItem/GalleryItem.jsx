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
    <button class="like-button" onClick={() => likeImg(props.image.id)}>&#128151;</button>
  </div>
);

}



//   return (
//     <div>
//       <h2>Gallery List</h2>
//       <ul>
//         {galleryItems.map((id, description) => (
//           <li key={id}>{item.description}</li> // Display gallery data
//         ))}
//       </ul>
//     </div>
//   );
// }
export default GalleryItem;
