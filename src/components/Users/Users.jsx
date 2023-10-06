import React from "react";
import User from "./User/User";
import s from "./Users.module.scss";
import axios from "axios";

const Users = (props) => {
  const getUsers = () => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users?count=10&page=1")
      .then((response) => props.setUsers(response.data.items));
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Users</h2>
      <button onClick={getUsers}>Get users</button>
      <div className={s.users}>
        {props.users.map((user) => (
          <User follow={props.follow} unfollow={props.unfollow} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
