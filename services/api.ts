import axios from 'axios';

export const instance = axios.create({ baseURL: 'https://fe-task-api.stoqo.com' });
