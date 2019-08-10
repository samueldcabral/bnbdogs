import axios from 'axios';

const API_URL = 'http://localhost:8080/api';


export function getUsers() {
  const request = axios
    .get(API_URL + '/user')
    .then(res => res.data);
  return request;
}




