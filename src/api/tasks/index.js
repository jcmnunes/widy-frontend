import axios from 'axios';

export const createTask = data => axios.post('/api/tasks', data); // eslint-disable-line
