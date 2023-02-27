import axios from 'axios';

export const makeRequest = axios.create({
    baseURL:"https://facebook-app.herokuapp.com//api/",
    withCredentials:true
})