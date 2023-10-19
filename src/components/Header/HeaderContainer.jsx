import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { auth, logout } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header
        userData={this.props.userData}
        logout={this.props.logout}
        isAuth={this.props.isAuth}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.auth.userData,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { logout })(HeaderContainer);
