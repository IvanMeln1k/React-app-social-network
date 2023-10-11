import React from "react";
import s from "./header.module.scss";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <NavLink to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Q4hcU4RO5X6uAYlqB6X-kit4tOIAmqYG7gJHZFg5gIyFcRbgGRN5fZt5JeGuBdgn52I&usqp=CAU"
            alt="logo social network"
          />
        </NavLink>
      </div>
      {!props.isAuth ? (
        <div className={s.header__link}>
          <NavLink to="/login">login</NavLink>
        </div>
      ) : (
        <div className={s.header__link}>
          <NavLink to={`/profile/${props.userData.id}`}>
            {props.userData.login}
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
