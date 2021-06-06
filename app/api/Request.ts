import axios from 'axios';

const request = axios.create({
  baseURL: 'https://mobile-shopiks.herokuapp.com',
});

export {request};
