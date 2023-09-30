import React from "react";
import s from "./Profile.module.scss";
import { Posts } from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <Posts
        addPost={props.addPost}
        changeNewPostText={props.changeNewPostText}
        posts={props.state.posts}
        newPostText={props.state.newPostText}
      />
    </div>
  );
};
