import axios from 'axios';
import { token } from './user-api';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
axios.defaults.headers.common.Authorization = `Bearer ${token.set()}`;


export async function requestContacts() {
  try {
    const { data } = await axios.get('/contacts'); 
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
export async function addContacts(contact) {
  try {
    const { data } = await axios.post('/contacts', contact);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
export async function deleteContacts(id) {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}