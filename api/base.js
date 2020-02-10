import axios from 'axios';

const api = axios.create({
    baseURL: 'https://prop24app.herokuapp.com',
    timeout: 20000
});

export default api