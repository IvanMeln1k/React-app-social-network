import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";

class LoginContainer extends React.Component {
  render() {
    return <Login login={this.props.login} captcha={this.props.captcha} />;
  }
}

const mapStateToProps = (state) => {
  return {
    captcha: state.auth.captcha,
  };
};

export default connect(mapStateToProps, {
  login,
})(LoginContainer);
