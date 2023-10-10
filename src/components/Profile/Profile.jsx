import React from "react";
import s from "./Profile.module.scss";
import avatar from "../../assets/images/avatar.jpg";

export const Profile = (props) => {
  return (
    <div className={s.profile}>
      <div className={s.profile__header}>
        <div className={s.profile__avatar}>
          <img src={props.profile.photos.large || avatar} alt="avatar" />
        </div>
        <div className={s.profile__shortinfo}>
          <div className={s.profile__name}>{props.profile.fullName}</div>
          <div className={s.profile__status}>Here will be status...</div>
        </div>
      </div>

      <div className={s.profile__info}>Other data</div>
    </div>
  );
};

export default Profile;
