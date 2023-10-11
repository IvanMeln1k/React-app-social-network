import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import axios from "axios";
import { setUserData } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode == 0) {
          this.props.setUserData(response.data.data);
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
