import React from "react";
import { Post } from "./Post/Post";
import s from "./Posts.module.scss";

export const Posts = (props) => {
  console.log(props.newPostTextRef);
  const newPostTextRef = React.createRef();

  const addPost = () => {
    props.addPost(newPostTextRef.current.value);
    props.changeNewPostText("");
  };

  const onChange = () => {
    props.changeNewPostText(newPostTextRef.current.value);
  };

  return (
    <div className={s.posts}>
      <div className={s.form}>
        <textarea
          onChange={onChange}
          ref={newPostTextRef}
          value={props.newPostText}
        ></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div>
        {props.posts.map((item) => (
          <Post text={item.text} />
        ))}
      </div>
    </div>
  );
};
