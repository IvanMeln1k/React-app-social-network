import React from "react";
import s from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

const Link = (props) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? s.link_active + " " + s.link : s.link
      }
      to={props.path}
    >
      {props.name}
    </NavLink>
  );
};

export const Navbar = () => {
  return (
    <div>
      <ul className={s.list}>
        <li>
          <Link name="Profile" path="/profile" />
        </li>
        <li>
          <Link name="Dialogs" path="/dialogs" />
        </li>
        <li>
          <Link name="Users" path="/users" />
        </li>
      </ul>
    </div>
  );
};
