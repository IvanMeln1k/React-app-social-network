import React from "react";
import User from "./User/User";
import s from "./Users.module.scss";
import axios from "axios";

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.page}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  onChagePage(page) {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${page}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
        this.props.setPage(page);
      });
  }

  render() {
    const totalPageCount = Math.ceil(this.props.totalCount / this.props.count);
    const totalPagePageCount = Math.ceil(totalPageCount / this.props.pageCount);
    return (
      <div className={s.wrapper}>
        <h2 className={s.title}>Users</h2>
        <div className={s.pagination}>
          <button
            className={s.pagination__button}
            onClick={() => this.props.setPagePage(this.props.pagePage - 1)}
            disabled={this.props.pagePage == 1}
          >
            Previous
          </button>
          <div className={s.pagination__pages}>
            {Array.from({ length: 5 }, (_, index) => index + 1).map(
              (item, index, array) => {
                const page =
                  item + (this.props.pagePage - 1) * this.props.pageCount;
                if (page > totalPageCount) {
                  return;
                }
                return (
                  <button
                    className={
                      page == this.props.page
                        ? s.pagination__page + " " + s.pagination__page_active
                        : s.pagination__page
                    }
                    onClick={() => this.onChagePage(page)}
                  >
                    {page}
                  </button>
                );
              }
            )}
          </div>
          <button
            className={s.pagination__button}
            onClick={() => this.props.setPagePage(this.props.pagePage + 1)}
            disabled={totalPagePageCount <= this.props.pagePage}
          >
            Next
          </button>
        </div>
        <div className={s.users}>
          {this.props.users.map((user) => (
            <User
              follow={this.props.follow}
              unfollow={this.props.unfollow}
              user={user}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
