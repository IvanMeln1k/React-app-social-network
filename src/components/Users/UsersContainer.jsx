import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unfollow,
  setTotalCount,
  setPage,
  setPagePage,
  setIsFetching,
} from "../../redux/users-reducer";
import axios from "axios";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.page}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
        this.props.setIsFetching(false);
      });
  }

  onChagePage = (page) => {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${page}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
        this.props.setPage(page);
        this.props.setIsFetching(false);
      });
  };

  render() {
    return (
      <Users
        onChagePage={this.onChagePage}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        setPagePage={this.props.setPagePage}
        totalCount={this.props.totalCount}
        count={this.props.count}
        pageCount={this.props.pageCount}
        pagePage={this.props.pagePage}
        users={this.props.users}
        page={this.props.page}
        isFetching={this.props.isFetching}
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
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setTotalCount,
  setPage,
  setPagePage,
  setIsFetching,
})(UsersContainer);
