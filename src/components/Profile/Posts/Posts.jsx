import React from "react";
import Post from "./Post/Post";
import s from "./Posts.module.scss";

const Posts = (props) => {
  const newPostTextRef = React.createRef();

  const addPost = () => {
    props.addPost();
  };

  const onChange = () => {
    props.onChange(newPostTextRef.current.value);
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

export default Posts;
