import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true
});

export const signupUser = (data) => {
    return API.post('/signup', data);
};

export const loginUser = (data) => {
    return API.post('/login', data);
};

export const logoutUser = () => {
    return API.get('/logout');
};