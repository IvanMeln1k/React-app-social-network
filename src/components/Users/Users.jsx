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
      .get("https://social-network.samuraijs.com/api/1.0/users?count=10&page=1")
      .then((response) => this.props.setUsers(response.data.items));
  }

  render() {
    return (
      <div className={s.wrapper}>
        <h2 className={s.title}>Users</h2>
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
