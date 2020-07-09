import axios from 'axios';

export default (token = null) => {
  const storageToken = localStorage.getItem('token') || null;

  if (storageToken) {
    axios.defaults.headers.common['Authorization'] = storageToken;
  } else {
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = token;
  }
};
