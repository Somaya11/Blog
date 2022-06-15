import React from "react";
import "./AuthPage.css";
// import Logo from '../../components/Logo/Logo';
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
// import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default class AuthPage extends React.Component {
  state = {
    showLogin: true,
    
  };

  render() {
    return (
      <main className="AuthPage">
        <div>
          {/* <Logo /> */}
          <h3
            onClick={() => this.setState({ showLogin: !this.state.showLogin })}
          >
            {this.state.showLogin ? "LOG IN" : "SIGN UP"}
          </h3>
        </div>
        {/* If showLogin is true, show the login form. If false, show the signup form */}
        {this.state.showLogin ? (
          <LoginForm setUserInState={this.props.setUserInState} />
        ) : (
          <SignUpForm setUserInState={this.props.setUserInState} />
        )
        //<UserLogOut setUserInState = {this.props.setUSerInState}/>
        }

      </main>
    );
  }
}
