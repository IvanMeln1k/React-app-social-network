import React from "react";
import s from "./Dialogs.module.scss";
import { NavLink } from "react-router-dom";
import {
  addMessageActionCreator,
  changeNewMessageBodyActionCreator,
} from "../../redux/dialogs-reducer";

const Chat = (props) => {
  return (
    <div>
      <NavLink
        to={"/dialogs/" + props.id}
        className={({ isActive }) =>
          isActive ? s.link + " " + s.link_active : s.link
        }
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export const Dialogs = (props) => {
  const onChange = (e) => {
    props.dispatch(changeNewMessageBodyActionCreator(e.target.value));
  };
  const sendMessage = () => {
    props.dispatch(addMessageActionCreator());
    props.dispatch(changeNewMessageBodyActionCreator(""));
  };

  return (
    <div>
      <h2>Dialogs</h2>
      <div className={s.container}>
        <div className={s.chats}>
          {props.state.chats.map((item) => (
            <Chat name={item.name} id={item.id} />
          ))}
        </div>
        <div className={s.messagescol}>
          <div className={s.messages}>
            {props.state.messages.map((item) => (
              <div>{item.message}</div>
            ))}
          </div>
          <div className={s.form}>
            <div className={s.form__field}>
              <textarea
                onChange={onChange}
                value={props.state.newMessageBody}
              ></textarea>
            </div>
            <div className={s.form__button}>
              <button onClick={sendMessage}>send message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
