import React from "react";
import s from "./Dialogs.module.scss";
import { NavLink } from "react-router-dom";

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
  return (
    <div>
      <h2>Dialogs</h2>
      <div className={s.container}>
        <div className={s.chats}>
          {props.chats.map((item) => (
            <Chat name={item.name} id={item.id} />
          ))}
        </div>
        <div className={s.messages}>
          {props.messages.map((item) => (
            <div>{item.message}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
