import axios from 'axios';

const api = axios.create({
	baseUrl: '/api'
});

export default api;