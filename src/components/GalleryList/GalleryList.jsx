import React from 'react';

import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props) {
 
 
  return (
    <div>
        {props.list.map(imgItem => (
            <>
                <GalleryItem image={imgItem} />
            </>
        ))}
    </div>
)
}

export default GalleryList;
