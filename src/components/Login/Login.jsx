import React from "react";
import { Field, reduxForm } from "redux-form";
import { inputField } from "../common/Forms";
import { required } from "../../utils/validators";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="flex flex-col gap-[10px] mb-[10px]">
        <div className="[&_input]:min-h-[30px] flex [&_input]:px-[10px]">
          <Field
            name="email"
            component={inputField}
            type="text"
            placeholder="Email"
            validate={[required]}
          />
        </div>
        <div className="[&_input]:min-h-[30px] flex [&_input]:px-[10px]">
          <Field
            name="password"
            component={inputField}
            type="password"
            placeholder="Password"
            validate={[required]}
          />
        </div>
        <div className="flex gap-[10px] items-center">
          <span className="">Remember me</span>
          <Field name="rememberMe" component="input" type="checkbox" />
        </div>
      </div>
      {props.error && (
        <div className="text-red-500 mb-[10px]">{props.error}</div>
      )}
      <button
        className="flex min-h-[40px] bg-slate-400 px-[50px] items-center justify-center rounded-[5px] text-white hover:bg-slate-400/50 ease-linear duration-200"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (values) => {
    props.login(values.email, values.password, values.rememberMe);
  };
  return (
    <div>
      <h2 className="text-white text-[28px] mb-[10px]">Login</h2>
      <div>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Login;
