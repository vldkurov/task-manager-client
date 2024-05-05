import axios from 'axios';


const baseURL = process.env.REACT_APP_BASE_URL


const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
    // withCredentials: true
});


// Include the JWT in the header of all requests
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});


export default api;
