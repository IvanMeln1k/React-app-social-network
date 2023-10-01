import React from "react";
import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  changeNewMessageBodyActionCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    chats: state.dialogsPage.chats,
    newMessageBody: state.dialogsPage.newMessageBody,
    messages: state.dialogsPage.messages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (text) => {
      dispatch(changeNewMessageBodyActionCreator(text));
    },
    sendMessage: () => {
      dispatch(addMessageActionCreator());
      dispatch(changeNewMessageBodyActionCreator(""));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
