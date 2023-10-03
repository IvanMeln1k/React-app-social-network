import React from "react";
import s from "../Users.module.scss";

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
          <img src={props.user.avatar} alt="" />
        </div>
        <div className={s.user__name}>
          {props.user.name + " " + props.user.surname}
        </div>
      </div>
      {props.user.isFollowed ? (
        <button className={s.user__button} onClick={onClickUnfollow}>
          follow
        </button>
      ) : (
        <button className={s.user__button} onClick={onClickFollow}>
          unfollow
        </button>
      )}
    </div>
  );
};

export default User;
