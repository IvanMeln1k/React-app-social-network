import React from "react";
import s from "./Profile.module.scss";
import { Posts } from "./Posts/Posts";

export const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.header}>
        <div className={s.avatar}>
          <a href="#">
            <img
              src="https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-marshmellou.jpg"
              alt="profile avatar"
            />
          </a>
        </div>
        <div>
          <div>
            <a href="#">Username</a>
          </div>
        </div>
      </div>

      <div>
        <Posts />
      </div>
    </div>
  );
};
