import React from "react";
import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  changeNewMessageBodyActionCreator,
} from "../../redux/dialogs-reducer";
import StoreContext from "../../store-context";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().dialogsPage;

        const onChange = (text) => {
          store.dispatch(changeNewMessageBodyActionCreator(text));
        };
        const sendMessage = () => {
          store.dispatch(addMessageActionCreator());
          store.dispatch(changeNewMessageBodyActionCreator(""));
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
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
