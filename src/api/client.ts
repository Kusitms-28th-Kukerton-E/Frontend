import axios from 'axios';

const baseURL = 'https://api.yeongjin.site';

export const client = axios.create({
  baseURL,
});
