import React from "react";
import User from "./User/User";
import s from "./Users.module.scss";

const Users = (props) => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Users</h2>
      <div className={s.users}>
        {props.users.map((user) => (
          <User follow={props.follow} unfollow={props.unfollow} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
