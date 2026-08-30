import axios from 'axios';

const CustomFetch = axios.create({
  baseURL: 'http://localhost:5000/',
});

export default CustomFetch;