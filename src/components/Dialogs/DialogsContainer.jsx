import React from "react";
import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  changeNewMessageBodyActionCreator,
} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
  const state = props.store.getState().dialogsPage;

  const onChange = (text) => {
    props.store.dispatch(changeNewMessageBodyActionCreator(text));
  };
  const sendMessage = () => {
    props.store.dispatch(addMessageActionCreator());
    props.store.dispatch(changeNewMessageBodyActionCreator(""));
  };

  return (
    <Dialogs
      onChange={onChange}
      sendMessage={sendMessage}
      chats={state.chats}
      newMessageBody={state.newMessageBody}
      messages={state.messages}
    />
  );
};

export default DialogsContainer;
