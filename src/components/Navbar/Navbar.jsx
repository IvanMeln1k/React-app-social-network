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
  const links = [
    { name: "Profile", path: "/profile" },
    { name: "Dialogs", path: "/dialogs" },
    { name: "Users", path: "/users" },
  ];

  return (
    <div>
      <ul className={s.list}>
        {links.map((item) => (
          <li>
            <Link name={item.name} path={item.path} />
          </li>
        ))}
      </ul>
    </div>
  );
};
