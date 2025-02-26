// json-server –watch -d 180 –host 92.168.18.9 db.json

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.18.9:3000/'
})

export default api;