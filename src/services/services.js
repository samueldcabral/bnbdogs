import axios from "axios";

const API_URL = "http://localhost:8080/api";
// const API_URL = "http://localhost:9000/api";

export function getUsers() {
  const request = axios.get(API_URL + "/user").then(res => res.data);
  return request;
}

export function getUser(userId) {
  const request = axios.get(`${API_URL}/user/${userId}`).then(res => res.data);
  return request;
}

export function addUser(user) {
  const request = axios.post(API_URL + "/user", user);
  return request;
}

export function loginUser(user) {
  const request = axios.post(API_URL + "/login", user);
  return request;
}

export function getDogs() {
  const request = axios.get(API_URL + "/dog").then(res => res.data);
  return request;
}

export function getServices() {
  const request = axios.get(API_URL + "/service").then(res => res.data);
  return request;
}

export function getBookings() {
  const request = axios.get(API_URL + "/booking").then(res => res.data);
  return request;
}

export function addDog(dog) {
  const request = axios.post(API_URL + "/dog", dog);
  return request;
}

export function deleteDog(dogId) {
  const request = axios.delete(`${API_URL}/dog/${dogId}`).then(res => res.data);
  return request;
}

export function editDog(dog) {
  return axios
    .put(`${API_URL}/dog/${dog.id}`, dog)
    .then(res => console.log(res))
    .catch(error => console.log(error));
}

export function showDogsUser(userId) {
  const request = axios.get(`${API_URL}/dogs/${userId}`);
  return request;
}

export function showBookingsUser(userId) {
  const request = axios.get(`${API_URL}/bookings/${userId}`);
  return request;
}

export function findDogByID(dogId) {
  const request = axios.get(`${API_URL}/dog/${dogId}`).then(res => res.data);
  return request;
}

export function findDogNameByID(dogId) {
  const request = axios
    .get(`${API_URL}/dog/${dogId}/name`)
    .then(res => res.data);
  return request;
}

export function addServiceBooking(bookingId, service) {
  const request = axios.post(`${API_URL}/booking/${bookingId}`, service);
  return request;
}

export function showBookingServicesByBooking(bookingId) {
  const request = axios.get(`${API_URL}/bookingsservices/${bookingId}`);
  return request;
}

export function addBooking(booking) {
  const request = axios.post(API_URL + "/booking", booking);
  return request;
}
