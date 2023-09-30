import s from "../Profile.module.scss";

const ProfileInfo = (props) => {
  return (
    <div className={s.header}>
      <div className={s.avatar}>
        <a href="#">
          <img
            src="https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-marshmellou.jpg"
            alt="profile avatar"
          />
        </a>
      </div>
      <div>
        <div>
          <a href="#">Username</a>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
