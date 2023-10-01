import React from "react";
import {
  addPostActionCreator,
  changeNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import Posts from "./Posts";

const PostsContainer = (props) => {
  const state = props.store.getState().profilePage;

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
    props.store.dispatch(changeNewPostTextActionCreator(""));
  };

  const onChange = (text) => {
    props.store.dispatch(changeNewPostTextActionCreator(text));
  };

  return (
    <Posts
      posts={state.posts}
      newPostText={state.newPostText}
      addPost={addPost}
      onChange={onChange}
    />
  );
};

export default PostsContainer;
