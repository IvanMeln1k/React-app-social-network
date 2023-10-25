import React, { useState } from "react";
import ProfileDataReduxForm from "./ProfileDataForm";
import ProfileDataInfo from "./ProfileDataInfo";

const ProfileData = ({ profile, isOwner, updateProfile }) => {
  const [editMode, setEditMode] = useState(false);
  const onSubmit = (profile) => {
    updateProfile(profile);
  };
  return (
    <div>
      {isOwner && (
        <div>
          {editMode ? (
            <button
              className="flex min-h-[20px] bg-slate-400 px-[20px] items-center justify-center rounded-[5px] text-white hover:bg-slate-400/50 ease-linear duration-200"
              onClick={() => setEditMode(false)}
            >
              Cancel
            </button>
          ) : (
            <button
              className="flex min-h-[20px] bg-slate-400 px-[20px] items-center justify-center rounded-[5px] text-white hover:bg-slate-400/50 ease-linear duration-200"
              onClick={() => setEditMode(true)}
            >
              Edit
            </button>
          )}
        </div>
      )}
      <div>
        {editMode && isOwner ? (
          <ProfileDataReduxForm profile={profile} onSubmit={onSubmit} />
        ) : (
          <ProfileDataInfo profile={profile} />
        )}
      </div>
    </div>
  );
};

export default ProfileData;
