import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";

const Chat = (props) => {
  return (
    <div>
      <NavLink
        to={"/dialogs/" + props.id}
        className={({ isActive }) =>
          classNames("", {
            "": isActive,
          })
        }
      >
        {props.name}
      </NavLink>
    </div>
  );
};

const Dialogs = (props) => {
  const onChange = (e) => {
    props.changeNewMessageBody(e.target.value);
  };
  const sendMessage = () => {
    props.addMessage();
    props.changeNewMessageBody("");
  };

  return (
    <div>
      <h2 className="text-white text-[28px] font-bold mb-[20px]">Dialogs</h2>
      <div className="flex">
        <div className="flex-[0_0_20%]">
          {props.chats.map((item) => (
            <Chat name={item.name} id={item.id} />
          ))}
        </div>
        <div className="flex-[1_1_auto]">
          <div className="">
            {props.messages.map((item) => (
              <div>{item.message}</div>
            ))}
          </div>
          <div className="">
            <div className="">
              <textarea
                onChange={onChange}
                value={props.newMessageBody}
              ></textarea>
            </div>
            <div className="">
              <button onClick={sendMessage}>send message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
