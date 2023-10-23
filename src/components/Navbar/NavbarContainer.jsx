import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";

class NavbarContainer extends React.Component {
  render() {
    return <Navbar userData={this.props.userData} />;
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.auth.userData,
  };
};

export default connect(mapStateToProps, {})(NavbarContainer);
