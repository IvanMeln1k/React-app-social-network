import React from "react";
import avatar from "../../assets/images/avatar.jpg";
import ProfileStatus from "./ProfileStatus";

export const Profile = ({ profile, status, updateStatus, userData }) => {
  return (
    <div className="">
      <div className="flex gap-[10px]">
        <div className="w-[300px] h-[300px] relative">
          <img
            className="w-full absolute h-full object-cover"
            src={profile.photos.large || avatar}
            alt="avatar"
          />
        </div>
        <div className="">
          <div className="text-white text-[24px]">{profile.fullName}</div>
          <ProfileStatus
            userData={userData}
            userId={profile.userId}
            status={status}
            updateStatus={updateStatus}
          />
        </div>
      </div>

      <div className="">Other data</div>
    </div>
  );
};

export default Profile;
