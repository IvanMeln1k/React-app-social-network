import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const changeStatus = (e) => {
    setStatus(e.currentTarget.value);
  };
  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div className="text-white italic text-[16px]">
      {editMode ? (
        <input
          className="text-black"
          onChange={changeStatus}
          onBlur={deactivateEditMode}
          value={status}
        />
      ) : (
        <span onDoubleClick={activateEditMode}>
          {props.status || "no status"}
        </span>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
