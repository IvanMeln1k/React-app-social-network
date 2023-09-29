import React from "react";
import s from "./Post.module.scss";

export const Post = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.avatar}>
          <a href="#">
            <img
              src="https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-marshmellou.jpg"
              alt="user avatar"
            />
          </a>
        </div>
        <div>
          <a href="#">Username</a>
        </div>
      </div>
      <div className={s.content}>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure aliquid
          consectetur non sunt repellendus accusamus voluptates saepe nostrum
          voluptas similique!
        </div>
        <div>
          <button>Like</button>
        </div>
      </div>
    </div>
  );
};
