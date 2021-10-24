import axios from "axios";

const baseURL = 'http://localhost:4000';
function createHeaders(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return config;
}

function login(body){
const promisse = axios.post(`${baseURL}/sign-in`,body);
return promisse;
}
function cadastro(body){
    const promisse = axios.post(`${baseURL}/sign-up`,body);
    return promisse;
}

function getHistory(token){
    const config = createHeaders(token);
    const promisse = axios.get(`${baseURL}/userhistory`,config);
    return promisse;
}

function sendEntry(token,body){
    const config = createHeaders(token)
    const promisse = axios.post(`${baseURL}/sendEntry`,body,config);
    return promisse;
}
function sendOutput(token,body){
    const config = createHeaders(token)
    const promisse = axios.post(`${baseURL}/sendOutput`,body,config);
    return promisse;
}

export{
    login,
    getHistory,
    cadastro,
    sendEntry,
    sendOutput,
}