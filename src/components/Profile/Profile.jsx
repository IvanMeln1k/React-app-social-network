import React from "react";
import s from "./Profile.module.scss";
import { Posts } from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <Posts posts={props.posts} />
    </div>
  );
};
