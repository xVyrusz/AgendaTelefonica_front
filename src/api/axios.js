import axios from "axios";

const instance = axios.create({
    baseURL: 'https://agendatelefonica-back.onrender.com/api',
    withCredentials: true
})

export default instance