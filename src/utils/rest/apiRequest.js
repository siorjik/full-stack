import axios from 'axios';

export default (method, url, dataName) => {
  return axios[method](url)
    .then(resp => resp.data[dataName])
    .catch(err => console.error(err));
};