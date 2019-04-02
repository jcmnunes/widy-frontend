import axios from 'axios';

const LOGIN = '/api/auth/login';
const LOGOUT = '/api/auth/logout';
const FORGOT = '/api/auth/forgot';
export const CHECK = '/api/auth/check';
export const RESET = '/api/auth/reset';

export const login = params => axios.post(LOGIN, params);
export const logout = () => axios.get(LOGOUT);
export const forgot = params => axios.post(FORGOT, params);
