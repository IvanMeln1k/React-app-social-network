import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import axios from "axios";
import { setUserData } from "../../redux/auth-reducer";
import { authAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.authMe().then((data) => {
      if (data.resultCode == 0) {
        this.props.setUserData(data.data);
      }
    });
  }

  render() {
    return <Header userData={this.props.userData} isAuth={this.props.isAuth} />;
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.auth.userData,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
