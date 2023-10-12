import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="bg-indigo-200 col-span-5 flex justify-between items-center min-h-[80px]">
      <div className="w-[50px] h-[50px] rounded-[50%] overflow-hidden [&>img]:max-w-[100%]">
        <NavLink to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Q4hcU4RO5X6uAYlqB6X-kit4tOIAmqYG7gJHZFg5gIyFcRbgGRN5fZt5JeGuBdgn52I&usqp=CAU"
            alt="logo social network"
          />
        </NavLink>
      </div>
      {!props.isAuth ? (
        <div className="text-white underline text-[20px] hover:no-underline">
          <NavLink to="/login">login</NavLink>
        </div>
      ) : (
        <div className="text-white underline text-[20px] hover:no-underline">
          <NavLink to={`/profile/${props.userData.id}`}>
            {props.userData.login}
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
