import axios from 'axios';

const api = axios.create({
    baseURL: 'https://back-biblioteca-production-4e91.up.railway.app',
});

export default api;