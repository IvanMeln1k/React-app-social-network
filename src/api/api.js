import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "8ff12841-2998-4053-ab83-4cdd6c6065dd",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0",
});

export const usersAPI = {
  getUsers(count, page) {
    return instance
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${count}&page=${page}`
      )
      .then((response) => response.data);
  },
};

export const authAPI = {
  authMe() {
    return instance.get("/auth/me").then((response) => response.data);
  },
};
