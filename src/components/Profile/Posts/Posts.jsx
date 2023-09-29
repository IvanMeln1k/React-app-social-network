import React from "react";
import { Post } from "./Post/Post";
import s from "./Posts.module.scss";

export const Posts = () => {
  let posts = [
    { id: 1, text: "yo" },
    { id: 2, text: "hello world!" },
    { id: 3, text: "yo yo yo" },
    { id: 4, text: "sometext" },
  ];

  return (
    <div className={s.posts}>
      <div className={s.form}>
        <textarea></textarea>
        <button>Add post</button>
        <button>Reset</button>
      </div>
      <div>
        {posts.map((item) => (
          <Post text={item.text} />
        ))}
      </div>
    </div>
  );
};
