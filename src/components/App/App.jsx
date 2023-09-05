import React from 'react';
import './App.css';
import axios from 'axios'


function App() {

  axios.get('/gallery')
  .then(response => {
    // Handle the successful response here
    console.log('Data received:', response.data);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <img src="images/concert.jpeg"/>
        <img src="images/mn_vikings.jpeg"/>
        <img src="images/parlour.jpeg"/>
        <img src="images/state_fair.jpeg"/>
        <img src="images/sunset.jpeg"/>
      </div>
    );
}

export default App;
