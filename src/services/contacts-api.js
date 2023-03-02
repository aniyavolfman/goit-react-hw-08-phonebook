import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export async function requestContacts() {
  try {
    const { data } = await axios.get('/contacts'); 
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
}
export async function addContacts(contact) {
  try {
    const { data } = await axios.post('/contacts', contact);
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
}
export async function deleteContacts(id) {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
}