import axios from 'axios';

export const createTask = data => axios.post('/api/tasks', data);
export const updateTask = (taskId, params) => axios.put(`/api/tasks/${taskId}`, params);
