import axios from 'axios';

export const getDays = () => axios.get('/api/days');
export const getDay = dayId => axios.get(`/api/days/${dayId}`);
export const createDay = () => axios.post('/api/days', { day: new Date() });
