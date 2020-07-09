import axios from 'axios';

export default (method, url, dataName = null, data = {}) => {
  return axios[method](url, { data })
    .then(resp => dataName ? resp.data[dataName] : resp.data)
    .catch(err => console.error(err));
};