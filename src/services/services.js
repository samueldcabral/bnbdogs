import axios from 'axios';

const API_URL = 'http://localhost:8080/api';


export function getUsers() {
  const request = axios
    .get(API_URL + '/user')
    .then(res => res.data);
  return request;
}

export function getDogs() {
  const request = axios
    .get(API_URL + '/dog')
    .then(res => res.data);
  return request;
}

export function getServices() {
  const request = axios
    .get(API_URL + '/service')
    .then(res => res.data);
  return request;
}

export function getBookings() {
  const request = axios
    .get(API_URL + '/booking')
    .then(res => res.data);
  return request;
}

export function addDog(dog) {
  const request = axios
    .post(API_URL+ '/dog', dog)
  return request;
}



