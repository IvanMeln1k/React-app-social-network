import React from "react";
import { Post } from "./Post/Post";
import s from "./Posts.module.scss";

export const Posts = () => {
  return (
    <div className={s.posts}>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};
