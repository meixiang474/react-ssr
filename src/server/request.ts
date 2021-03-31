import { HOST } from "@/api";
import axios from "axios";
import { Request } from "express";

const createServerRequest = (req: Request) => {
  const instance = axios.create({
    baseURL: HOST,
    headers: {
      post: {
        "Content-Type": "application/json; charset=utf-8",
      },
      cookie: req.get("cookie") || "",
    },
  });

  instance.interceptors.response.use(
    (res) => res.data,
    (err) => Promise.reject(err)
  );

  return instance;
};

export default createServerRequest;
