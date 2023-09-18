import { useState } from 'react'

import GalleryItem from '../GalleryItem/GalleryItem';



function GalleryList(props) {

    return (
        <div>
            {props.list.map((imgItem, i) => (
                <div key={i}>
                    <GalleryItem image={imgItem} />
                </div>
            ))}
        </div>
    )
}

export default GalleryList;