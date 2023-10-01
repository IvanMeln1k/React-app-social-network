import React from "react";
import {
  addPostActionCreator,
  changeNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import StoreContext from "../../../store-context";

const PostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().profilePage;

        const addPost = () => {
          store.dispatch(addPostActionCreator());
          store.dispatch(changeNewPostTextActionCreator(""));
        };

        const onChange = (text) => {
          store.dispatch(changeNewPostTextActionCreator(text));
        };

        return (
          <Posts
            posts={state.posts}
            newPostText={state.newPostText}
            addPost={addPost}
            onChange={onChange}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default PostsContainer;
