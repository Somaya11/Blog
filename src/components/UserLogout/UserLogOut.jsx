import React from 'react';


class UserLogOut extends React.Component {
  handleLogOut = () => {
    localStorage.removeItem('token')
    this.props.setUserInState(null)
  }

  render() {
  return (
      <div className='UserLogOut'>
        <div>Name: {this.props.name}</div>
        <div>Email: {this.props.email}</div>
        <button className="btn-sm" onClick={this.handleLogOut}>Logout</button>
      </div>
  );
  }
}

export default UserLogOut;