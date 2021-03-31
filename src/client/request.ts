import axios from "axios";

const clientRequest = axios.create({
  baseURL: "/",
  headers: {
    post: {
      "Content-Type": "application/json; charset=utf-8",
    },
  },
});

clientRequest.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err)
);

export default clientRequest;
