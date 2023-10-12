import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  setPagePage,
  getUsers,
  follow,
  unfollow,
} from "../../redux/users-reducer";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers(this.props.count, this.props.page);
  }

  onChagePage = (page) => {
    this.props.getUsers(this.props.count, page);
  };

  render() {
    return (
      <Users
        onChagePage={this.onChagePage}
        setPagePage={this.props.setPagePage}
        totalCount={this.props.totalCount}
        count={this.props.count}
        pageCount={this.props.pageCount}
        pagePage={this.props.pagePage}
        users={this.props.users}
        page={this.props.page}
        isFetching={this.props.isFetching}
        inProcess={this.props.inProcess}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    page: state.usersPage.page,
    count: state.usersPage.count,
    pagePage: state.usersPage.pagePage,
    pageCount: state.usersPage.pageCount,
    isFetching: state.usersPage.isFetching,
    inProcess: state.usersPage.inProcess,
  };
};

export default connect(mapStateToProps, {
  setPagePage,
  getUsers,
  follow,
  unfollow,
})(UsersContainer);
