import React from "react";
import { Field, reduxForm } from "redux-form";
import { inputField } from "../../common/Forms";

const contacts = [
  "github",
  "vk",
  "facebook",
  "instagram",
  "twitter",
  "website",
  "youtube",
  "mainLink",
];

const ProfileDataForm = ({
  handleSubmit,
  error,
  profile,
  initialize,
  destroy,
}) => {
  React.useEffect(() => {
    destroy();
    initialize(profile);
    console.log("effect");
  }, [destroy, initialize, profile]);
  return (
    <form
      onSubmit={handleSubmit}
      className="[&>*]:mb-[10px] [&>*:last-child]:mb-0 font-[500] text-[16px]"
    >
      <div className="text-[20px]">Edit profile</div>
      <label className="[&_input]:min-h-[30px] flex [&_input]:px-[10px] items-center gap-[10px]">
        <span>Lookink for a job</span>
        <Field component={inputField} type="checkbox" name="lookingForAJob" />
      </label>
      <label className="[&_input]:min-h-[30px] flex [&_input]:px-[10px]">
        <Field
          component={inputField}
          type="text"
          name="lookingForAJobDescription"
          placeholder="Looking for a job description"
        />
      </label>
      <label className="[&_input]:min-h-[30px] flex [&_input]:px-[10px]">
        <Field
          component={inputField}
          type="text"
          name="fullName"
          placeholder="Full name"
        />
      </label>
      <label className="[&_input]:min-h-[30px] flex [&_input]:px-[10px]">
        <Field
          component={inputField}
          type="text"
          name="aboutMe"
          placeholder="About me"
        />
      </label>
      <div>
        <div className="mb-[10px]">Contacts</div>
        <div className="ml-[20px] flex flex-col gap-[10px]">
          {contacts.map((item, index, array) => {
            return (
              <label className="[&_input]:min-h-[30px] flex [&_input]:px-[10px]">
                <Field
                  component={inputField}
                  type="text"
                  name={`contacts.${item}`}
                  placeholder={item}
                />
              </label>
            );
          })}
        </div>
      </div>
      {error && <div className="text-red-500 mb-[10px]">{error}</div>}
      <button
        className="flex min-h-[40px] bg-slate-400 px-[50px] items-center justify-center rounded-[5px] text-white hover:bg-slate-400/50 ease-linear duration-200"
        type="submit"
      >
        Edit
      </button>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({
  form: "profileForm",
})(ProfileDataForm);

export default ProfileDataReduxForm;
