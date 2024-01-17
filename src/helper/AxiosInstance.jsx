// AxiosInstance.js
import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api';

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    // Ajoutez d'autres en-têtes au besoin
  },
});

export default axiosInstance;

