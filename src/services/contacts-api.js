import axios from 'axios';

axios.defaults.baseURL = 'https://63fb75f94e024687bf78ee0e.mockapi.io/';

export async function requestContacts() {
  try {
    const { data } = await axios.get('contacts');
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function addContacts(contact) {
  try {
    const { data } = await axios.post('contacts', contact);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function deleteContacts(id) {
  try {
    const { data } = await axios.delete(`contacts/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
