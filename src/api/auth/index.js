import axios from 'axios';

const LOGIN = '/api/auth/login';
const LOGOUT = '/api/auth/logout';
const FORGOT = '/api/auth/forgot';
const RESET = '/api/auth/reset';
const CHECK = '/api/auth/check';

export const login = params => axios.post(LOGIN, params);
export const logout = () => axios.get(LOGOUT);
export const forgot = params => axios.post(FORGOT, params);
export const reset = params => axios.post(RESET, params);
export const check = () => axios.get(CHECK);
