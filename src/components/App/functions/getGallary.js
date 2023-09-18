import axios from 'axios'

const fetchGallery = () => {
    const data = axios.get('/gallery')
    .then(response => {
      // Handle the successful response here
      //console.log('Data received:', response.data);
      return response.data;
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });
    return data
}

export default fetchGallery