import axios from "axios";

const baseURL = 'http://localhost:4000';

function login(body){
const promisse = axios.post(`${baseURL}/sign-in`,body);
return promisse;
}



export{
    login,
}