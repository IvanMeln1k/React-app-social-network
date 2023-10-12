import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { auth } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.auth();
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

export default connect(mapStateToProps, { auth })(HeaderContainer);
