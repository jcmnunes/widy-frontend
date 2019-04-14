import axios from 'axios';

export const createTask = data => axios.post('/api/tasks', data);
export const updateTask = (taskId, params) => axios.put(`/api/tasks/${taskId}`, params);
export const moveTask = params => axios.put('/api/tasks/move', params);
