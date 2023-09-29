import React from "react";
import s from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <div>
      <ul className={s.list}>
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">Dialogs</a>
        </li>
        <li>
          <a href="#">Users</a>
        </li>
      </ul>
    </div>
  );
};
