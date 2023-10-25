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
      .get(`/users?count=${count}&page=${page}`)
      .then((response) => response.data);
  },
  follow(id) {
    return instance.post(`/follow/${id}`).then((response) => response.data);
  },
  unfollow(id) {
    return instance.delete(`/follow/${id}`).then((response) => response.data);
  },
};

export const authAPI = {
  authMe() {
    return instance.get("/auth/me").then((response) => response.data);
  },
  login(email, password, rememberMe = false) {
    return instance
      .post("/auth/login", {
        email,
        password,
        rememberMe,
      })
      .then((response) => response.data);
  },
  logout() {
    return instance.delete("/auth/login").then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(id) {
    return instance.get(`/profile/${id}`).then((response) => response.data);
  },
  getStatus(id) {
    return instance
      .get(`/profile/status/${id}`)
      .then((response) => response.data);
  },
  updateStatus(status) {
    return instance
      .put(`/profile/status`, { status: status })
      .then((response) => response.data);
  },
  updatePhoto(photo) {
    let data = new FormData();
    data.append("image", photo);
    return instance
      .put(`/profile/photo`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => response.data);
  },
  updateProfile(profile) {
    return instance.put(`/profile`, profile).then((response) => response.data);
  },
};
