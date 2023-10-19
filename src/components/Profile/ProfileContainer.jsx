import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getProfile,
  getStatus,
  updateStatus,
} from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import axios from "axios";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile(this.props.userId || this.props.userData.id);
    this.props.getStatus(this.props.userId || this.props.userData.id);
  }

  render() {
    return (
      <>
        {this.props.isFetching || !this.props.profile ? (
          <div>Loading...</div>
        ) : (
          <Profile
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            userData={this.props.userData}
          />
        )}
      </>
    );
  }
}

const ProfileWithParams = (props) => {
  const { id } = useParams();

  return <ProfileContainer {...props} userId={id} />;
};

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    status: state.profilePage.status,
    userData: state.auth.userData,
  };
};

export default connect(mapStateToProps, {
  getProfile,
  getStatus,
  updateStatus,
})(ProfileWithParams);
