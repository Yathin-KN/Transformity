import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:2000/api/',
});


export default axiosClient;