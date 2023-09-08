import React from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';

//imports I made
import { useEffect, useState } from 'react';


function App() {

  let [galleryList, setGalleryList] = useState([]);


  useEffect(() => {
    fetchGallery();
  }, [])

  const fetchGallery = () => {
    axios.get('/gallery')
    .then(response => {
      // Handle the successful response here
      console.log('Data received:', response.data);
      setGalleryList(response.data);
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });
  }



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
