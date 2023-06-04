import axios from 'axios';

const api = axios.create({

   baseURL: 'https://bancodedados-api.onrender.com/api'

});

export default api;
