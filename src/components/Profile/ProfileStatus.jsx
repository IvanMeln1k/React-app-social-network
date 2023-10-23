import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = ({ userData, userId, status, updateStatus }) => {
  const [editMode, setEditMode] = useState(false);
  const [statusState, setStatusState] = useState(status);

  const changeStatus = (e) => {
    setStatusState(e.currentTarget.value);
  };
  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(statusState);
  };

  useEffect(() => {
    setStatusState(status);
  }, [status]);

  return (
    <div className="text-white italic text-[16px]">
      {editMode && userData.id == userId ? (
        <input
          autoFocus={true}
          className="text-black"
          onChange={changeStatus}
          onBlur={deactivateEditMode}
          value={statusState}
        />
      ) : (
        <span onDoubleClick={activateEditMode}>{status || "no status"}</span>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
