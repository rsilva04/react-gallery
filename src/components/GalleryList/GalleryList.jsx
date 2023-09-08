import React from 'react';

import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList, addLikes}) {
 
    // const galleryItems = [
    //     { id: 1, path: 'images/goat_small.jpg', description: 'Photo of a goat taken at Glacier National Park.', likes: 0 },
    //     { id: 2, path: 'images/concert.jpeg', description: 'Photo of me taken at a Steve Aoki Concert in Wayzata.', likes: 0 },
    //     { id: 3, path: 'images/mn_vikings.jpeg', description: 'Photo at the Minnesota Vikings Game.', likes: 0 },
    //     { id: 4, path: 'images/parlour.jpeg', description: 'Photo of me taken at my favorite restaurant, Parlour.', likes: 0 },
    //     { id: 5, path: 'images/state_fair.jpeg', description: 'Photo of me taken at the Minnesota State Fair.', likes: 0 },
    //     { id: 6, path: 'images/sunset.jpeg', description: 'Sunset picture taken at Nokomis Lake.', likes: 0 }
    
    // ];

    // const displayGallery = galleryItems.map((items) => (
    //     items.description, items.path, items.id
    // ))
  return (
    <div>
   {galleryList.map(item => <GalleryItem
    key= {item.id}
    item = {item}
    setLikes= {addLikes}/>)}
    </div>
  );
}

export default GalleryList;
