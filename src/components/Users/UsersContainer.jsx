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
} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    page: state.usersPage.page,
    count: state.usersPage.count,
    pagePage: state.usersPage.pagePage,
    pageCount: state.usersPage.pageCount,
  };
};

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setTotalCount,
  setPage,
  setPagePage,
})(Users);

export default UsersContainer;
