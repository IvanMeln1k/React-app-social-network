import React, { useState } from "react";
import avatar from "../../assets/images/avatar.jpg";
import ProfileStatus from "./ProfileStatus";
import { Field } from "redux-form";
import ProfileData from "./ProfileData/ProfileData";

export const Profile = ({
  profile,
  status,
  updateStatus,
  isOwner,
  updatePhoto,
  updateProfile,
}) => {
  return (
    <div className="">
      <div className="flex gap-[10px] mb-[10px]">
        <div className="">
          <div className="w-[300px] h-[300px] relative">
            <img
              className="w-full absolute h-full object-cover"
              src={profile.photos.large || avatar}
              alt="avatar"
            />
          </div>
          <div className="">
            {isOwner && (
              <input
                type="file"
                onChange={(e) => {
                  if (e.target.files.length) {
                    updatePhoto(e.target.files[0]);
                    e.target.value = [];
                  }
                }}
              />
            )}
          </div>
        </div>
        <div className="">
          <div className="text-white text-[24px]">{profile.fullName}</div>
          <ProfileStatus
            isOwner={isOwner}
            userId={profile.userId}
            status={status}
            updateStatus={updateStatus}
          />
        </div>
      </div>

      <div className="">
        <ProfileData
          profile={profile}
          isOwner={isOwner}
          updateProfile={updateProfile}
        />
      </div>
    </div>
  );
};

export default Profile;
