import React from "react";
import s from "../Users.module.scss";
import avatar from "../../../assets/images/avatar.jpg";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../../api/api";

const User = (props) => {
  const onClickFollow = () => {
    props.follow(props.user.id);
  };

  const onClickUnfollow = () => {
    props.unfollow(props.user.id);
  };

  return (
    <div className={s.user}>
      <div className={s.user__info}>
        <div className={s.user__ava}>
          <NavLink to={`/profile/${props.user.id}`}>
            <img src={props.user.photos.small || avatar} alt="" />
          </NavLink>
        </div>
        <div className={s.user__right}>
          <div className={s.user__name}>
            <NavLink to={`/profile/${props.user.id}`}>
              {props.user.name}
            </NavLink>
          </div>
          <div className={s.user__status}>
            {props.user.status || "нет статуса"}
          </div>
        </div>
      </div>
      {props.user.followed ? (
        <button
          disabled={props.inProcess.some((id) => id == props.user.id)}
          className={s.user__button}
          onClick={onClickUnfollow}
        >
          unfollow
        </button>
      ) : (
        <button
          disabled={props.inProcess.some((id) => id == props.user.id)}
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
