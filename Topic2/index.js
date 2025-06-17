import axios from 'axios';

axios.get('https://api.example.com')
  .then(response => console.log(response.data));