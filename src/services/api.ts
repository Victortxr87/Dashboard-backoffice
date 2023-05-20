import axios from 'axios';

const api = axios.create({
    baseURL: 'https://json-server-xgfn.onrender.com/',
});

export default api;
