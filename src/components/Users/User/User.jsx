import React from "react";
import s from "../Users.module.scss";
import avatar from "../../../assets/images/avatar.jpg";
import { NavLink } from "react-router-dom";

const User = ({ inProcess, user, follow, unfollow }) => {
  const onClickFollow = () => {
    follow(user.id);
  };

  const onClickUnfollow = () => {
    unfollow(user.id);
  };

  return (
    <div className={s.user}>
      <div className={s.user__info}>
        <div className={s.user__ava}>
          <NavLink to={`/profile/${user.id}`}>
            <img src={user.photos.small || avatar} alt="" />
          </NavLink>
        </div>
        <div className={s.user__right}>
          <div className={s.user__name}>
            <NavLink to={`/profile/${user.id}`}>{user.name}</NavLink>
          </div>
          <div className={s.user__status}>{user.status || "нет статуса"}</div>
        </div>
      </div>
      {user.followed ? (
        <button
          disabled={inProcess.some((id) => id == user.id)}
          className={s.user__button}
          onClick={onClickUnfollow}
        >
          unfollow
        </button>
      ) : (
        <button
          disabled={inProcess.some((id) => id == user.id)}
          className={s.user__button}
          onClick={onClickFollow}
        >
          follow
        </button>
      )}
    </div>
  );
};

export default User;
