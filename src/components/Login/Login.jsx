import React from "react";
import LoginReduxForm from "./LoginForm";

const Login = ({ login, captcha }) => {
  const onSubmit = (values) => {
    login(values.email, values.password, values.rememberMe, values.captcha);
  };
  return (
    <div>
      <h2 className="text-white text-[28px] mb-[10px]">Login</h2>
      <div>
        <LoginReduxForm onSubmit={onSubmit} captcha={captcha} />
      </div>
    </div>
  );
};

export default Login;
