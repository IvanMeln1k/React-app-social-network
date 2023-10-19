import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status != this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  activateEditMode() {
    this.setState({
      editMode: true,
    });
  }
  deactivateEditMode() {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  }
  changeStatus(e) {
    this.setState({
      status: e.currentTarget.value,
    });
  }

  render() {
    if (this.props.userId != this.props.userData.id) {
      return (
        <div className="text-white italic text-[16px]">
          <span>{this.props.status || "no status"}</span>
        </div>
      );
    }
    return (
      <div className="text-white italic text-[16px]">
        {this.state.editMode ? (
          <input
            className="text-black"
            onChange={this.changeStatus.bind(this)}
            onBlur={this.deactivateEditMode.bind(this)}
            value={this.state.status}
          />
        ) : (
          <span onDoubleClick={this.activateEditMode.bind(this)}>
            {this.props.status || "no status"}
          </span>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
