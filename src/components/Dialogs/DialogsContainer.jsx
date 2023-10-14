import React from "react";
import Dialogs from "./Dialogs";
import { addMessage, changeNewMessageBody } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { Navigate, redirect } from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
  return {
    chats: state.dialogsPage.chats,
    newMessageBody: state.dialogsPage.newMessageBody,
    messages: state.dialogsPage.messages,
  };
};

class DialogsContainer extends React.Component {
  render() {
    return (
      <Dialogs
        changeNewMessageBody={this.props.changeNewMessageBody}
        addMessage={this.props.addMessage}
        chats={this.props.chats}
        newMessageBody={this.props.newMessageBody}
        messages={this.props.messages}
      />
    );
  }
}

export default connect(mapStateToProps, {
  changeNewMessageBody,
  addMessage,
})(withAuthRedirect(DialogsContainer));
