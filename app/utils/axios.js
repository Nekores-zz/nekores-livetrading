import axios from 'axios';

const BASE_URL = 'https://api.livetrading.ch/graphql/v1';

export default axios.create({
  baseURL: BASE_URL,
});
