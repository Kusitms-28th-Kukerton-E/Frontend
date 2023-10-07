import axios from 'axios';

const baseURL = 'base_url';

export const client = axios.create({
  baseURL,
});
