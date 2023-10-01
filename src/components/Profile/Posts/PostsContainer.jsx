import React from "react";
import {
  addPostActionCreator,
  changeNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import { connect } from "react-redux";

const mapStatetoProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
      dispatch(changeNewPostTextActionCreator(""));
    },
    onChange: (text) => {
      dispatch(changeNewPostTextActionCreator(text));
    },
  };
};

const PostsContainer = connect(mapStatetoProps, mapDispatchToProps)(Posts);

export default PostsContainer;
