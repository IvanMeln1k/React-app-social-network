import React from "react";
import s from "./header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <a href="#">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Q4hcU4RO5X6uAYlqB6X-kit4tOIAmqYG7gJHZFg5gIyFcRbgGRN5fZt5JeGuBdgn52I&usqp=CAU"
            alt="logo social network"
          />
        </a>
      </div>
    </header>
  );
};
