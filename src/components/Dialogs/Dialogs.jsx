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

export const Dialogs = () => {
  let chats = [
    { id: 1, name: "Ivan" },
    { id: 2, name: "Marat" },
    { id: 3, name: "Denis" },
    { id: 4, name: "Yaroslav" },
    { id: 5, name: "Vlad" },
  ];

  let messages = [
    { id: 1, message: "Hello!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Norm" },
  ];

  return (
    <div>
      <h2>Dialogs</h2>
      <div className={s.container}>
        <div className={s.chats}>
          {chats.map((item) => (
            <Chat name={item.name} id={item.id} />
          ))}
        </div>
        <div className={s.messages}>
          {messages.map((item) => (
            <div>{item.message}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
