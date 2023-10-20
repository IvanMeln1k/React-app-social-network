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
import {
  getCountSelector,
  getInProcessSelector,
  getIsFetchingSelector,
  getPageCountSelector,
  getPagePageSelector,
  getPageSelector,
  getTotalCountSelector,
  getUsersSelector,
} from "../../redux/users-selectors";

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
    console.log("render");
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
  console.log("mstp");
  return {
    users: getUsersSelector(state),
    totalCount: getTotalCountSelector(state),
    page: getPageSelector(state),
    count: getCountSelector(state),
    pagePage: getPagePageSelector(state),
    pageCount: getPageCountSelector(state),
    isFetching: getIsFetchingSelector(state),
    inProcess: getInProcessSelector(state),
  };
};

export default connect(mapStateToProps, {
  setPagePage,
  getUsers,
  follow,
  unfollow,
})(UsersContainer);
