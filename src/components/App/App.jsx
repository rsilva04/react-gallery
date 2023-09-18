import React from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';
import fetchGallery from './functions/getGallary';

//imports I made
import { useEffect, useState } from 'react';


function App() {

  let [galleryList, setGalleryList] = useState([]);

  const getData = async () => {
    setGalleryList(await fetchGallery())
  }

  useEffect(() => {
    getData()
  }, [fetchGallery])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">My Gallery</h1>
      </header>
      <GalleryList list={galleryList} />
    </div>
  );
}

export default App;