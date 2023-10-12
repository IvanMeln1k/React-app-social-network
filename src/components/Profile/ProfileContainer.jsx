import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import axios from "axios";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile(this.props.userId || 2);
  }

  render() {
    return (
      <>
        {this.props.isFetching || !this.props.profile ? (
          <div>Loading...</div>
        ) : (
          <Profile profile={this.props.profile} />
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
  };
};

export default connect(mapStateToProps, {
  getProfile,
})(ProfileWithParams);
