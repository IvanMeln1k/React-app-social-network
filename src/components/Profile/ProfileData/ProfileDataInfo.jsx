const ProfileDataInfo = ({ profile }) => {
  return (
    <div className="font-[500] text-[16px]">
      <div>
        <span>Looking for a jog</span>:{" "}
        <span>{profile.lookingForAJob ? "yes" : "no"}</span>
      </div>
      <div>
        <span>Looging for a job description</span>:{" "}
        <span>{profile.lookingForAJobDescription || "none"}</span>
      </div>
      <div>
        <span>About me</span>: <span>{profile.aboutMe || "none"}</span>
      </div>
      <div>
        <span>contacts</span>:
        <div className="pl-[20px]">
          {Object.keys(profile.contacts).map((item, index, array) => {
            return (
              <div>
                <span>item</span>:{" "}
                <span>{profile.contacts[item] || "none"}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileDataInfo;
