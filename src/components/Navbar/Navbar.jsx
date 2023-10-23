import React from "react";
import { NavLink } from "react-router-dom";
import cn from "classnames";

const Link = ({ name, path }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          "text-white text-[20px] min-w-full py-1 bg-slate-400 block px-2 rounded-[5px] ease-linear duration-200 hover:bg-slate-400/50",
          {
            "bg-slate-500": isActive,
          }
        )
      }
      to={path}
    >
      {name}
    </NavLink>
  );
};

const Navbar = ({ isAuth, userData }) => {
  const links = [
    { name: "Profile", path: `/profile/${userData.id || ""}` },
    { name: "Dialogs", path: "/dialogs" },
    { name: "Users", path: "/users" },
  ];

  return (
    <div className="bg-indigo-200 col-span-1">
      <ul className="flex flex-col-reverse gap-[10px]">
        {links.map((item) => (
          <li className="w-full">
            <Link name={item.name} path={item.path} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
