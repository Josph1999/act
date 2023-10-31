import axios from 'axios';

const getToken = () => {
  if (typeof window !== 'undefined' && localStorage.getItem('accessToken')) {
    return globalThis.localStorage.getItem('accessToken');
  }
};




const responseSuccessHandler = (response) => response;
const responseErrorHanlder = (error) => {
  return Promise.reject(error);
};
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  token: getToken(),
});

instance.interceptors.request.use((config) => {
  if (config.token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${config.token}`,
    };
  }

  return config;
});

instance.interceptors.response.use(
  (response) => responseSuccessHandler(response),
  (error) => responseErrorHanlder(error),
);

export const setAuthToken = (token) => {
  instance.defaults.token = token;
};

export default instance;