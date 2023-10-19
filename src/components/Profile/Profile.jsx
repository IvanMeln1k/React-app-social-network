import React from "react";
import avatar from "../../assets/images/avatar.jpg";
import ProfileStatus from "./ProfileStatus";
import classNames from "classnames";

export const Profile = (props) => {
  return (
    <div className="">
      <div className="flex gap-[10px]">
        <div className="w-[300px] h-[300px] relative">
          <img
            className="w-full absolute h-full object-cover"
            src={props.profile.photos.large || avatar}
            alt="avatar"
          />
        </div>
        <div className="">
          <div className="text-white text-[24px]">{props.profile.fullName}</div>
          <ProfileStatus
            userData={props.userData}
            userId={props.profile.userId}
            status={props.status}
            updateStatus={props.updateStatus}
          />
        </div>
      </div>

      <div className="">Other data</div>
    </div>
  );
};

export default Profile;
