import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";

class LoginContainer extends React.Component {
  render() {
    return <Login login={this.props.login} />;
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {
  login,
})(LoginContainer);
