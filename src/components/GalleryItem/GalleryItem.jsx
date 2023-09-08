import React from 'react';
import galleryItems from '../../../server/modules/gallery.data';
import GalleryList from '../GalleryList/GalleryList';

function GalleryItems(item, setlikes) {
  const { GalleryItems } = props; // Access galleryData prop

  let [image , setImage] = useState(true)

  function toggleImg({
    
  })

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
