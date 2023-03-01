import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const token = {
  set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        return token;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function register(credentials) {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function login(credentials) {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function logout(credentials) {
  try {
    await axios.post('/users/logout', credentials);
    token.unset();
  } catch (error) {
    console.log(error.message);
  }
}
