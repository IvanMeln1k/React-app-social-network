import React from "react";
import s from "./Dialogs.module.scss";
import { NavLink } from "react-router-dom";

export const Dialogs = () => {
  return (
    <div>
      <h2>Dialogs</h2>
      <div className={s.container}>
        <div className={s.chats}>
          <div>
            <NavLink
              to="/dialogs/1"
              className={({ isActive }) =>
                isActive ? s.link + " " + s.link_active : s.link
              }
            >
              Ivan
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/dialogs/2"
              className={({ isActive }) =>
                isActive ? s.link + " " + s.link_active : s.link
              }
            >
              Marat
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/dialogs/3"
              className={({ isActive }) =>
                isActive ? s.link + " " + s.link_active : s.link
              }
            >
              Denis
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/dialogs/4"
              className={({ isActive }) =>
                isActive ? s.link + " " + s.link_active : s.link
              }
            >
              Yaroslav
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/dialogs/5"
              className={({ isActive }) =>
                isActive ? s.link + " " + s.link_active : s.link
              }
            >
              Vlad
            </NavLink>
          </div>
        </div>
        <div className={s.messages}>
          <div>Hello!</div>
          <div>How are you?</div>
        </div>
      </div>
    </div>
  );
};
