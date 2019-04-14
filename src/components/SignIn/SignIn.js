import React, {Component} from 'react';
import './sign.css';

class SignIn extends Component {
  render() {
    return (
    <div className="wrapper">
      <div className="box-one">
        <h1 className="sign-up-title">Sign up</h1>
        <form className="signin">
            <input className="login-input" type="text" placeholder="Avatar name"/>
            <input className="login-input" type="text" placeholder="Enter email..."/>
            <input className="login-input" type="password" placeholder="Password..."/>
          <button className="submit" type="submit">Sign up</button>
        </form>
      </div>
      </div>
    )
  }
}

export default SignIn;
