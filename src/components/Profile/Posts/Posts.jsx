import React from "react";
import { Post } from "./Post/Post";
import s from "./Posts.module.scss";

export const Posts = (props) => {
  return (
    <div className={s.posts}>
      <div className={s.form}>
        <textarea></textarea>
        <button>Add post</button>
        <button>Reset</button>
      </div>
      <div>
        {props.posts.map((item) => (
          <Post text={item.text} />
        ))}
      </div>
    </div>
  );
};
