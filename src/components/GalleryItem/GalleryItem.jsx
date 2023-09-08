import React from 'react';
import galleryItems from '../../../server/modules/gallery.data';
import GalleryList from '../GalleryList/GalleryList';

function GalleryItems(item, setlikes) {
  const { GalleryItems } = props; // Access galleryData prop

  let [image, setImage] = useState(true)

  function toggleImg() {
    setImage(false)
    setTimeout(() => {
      setImage(true);
    }, 4000)
  }

  if (image) {

    return (
      <>
      <div>
      <img className="ImageRouter" onClick = {() => toggleImg()} key= {item.id} scr={item.path}></img>

      <p>{item.likes}people like this</p>
        <button onClick = ></button>

      </div>



      </>



    )
  }

  return (
    <div>
      <h2>Gallery List</h2>
      <ul>
        {galleryItems.map((id, description) => (
          <li key={id}>{item.description}</li> // Display gallery data
        ))}
      </ul>
    </div>
  );
}

export default GalleryItems;
