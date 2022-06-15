import React from 'react';
import './UserLogOut.css'

class UserLogOut extends React.Component {
  handleLogOut = () => {
    localStorage.removeItem('token')
    this.props.setUserInState(null)
  }

  render() {
  return (
      <div className='UserLogOut'>
        <div>Name: ??</div>
        <div>Email: ??</div>
        <button className="btn-sm" onClick={this.handleLogOut}>Logout</button>
      </div>
  );
  }
}

export default UserLogOut;