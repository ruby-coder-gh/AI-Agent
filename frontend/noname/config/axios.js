import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // Update this to your API base URL
  timeout: 1000,
  headers: {'Content-Type': 'application/json'}
});

export default instance;
