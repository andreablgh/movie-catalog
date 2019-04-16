import React, {Component} from 'react';
import './sign.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

class SignIn extends Component {
  render() {
    return (
      <div className="cont">
            <Link to="/" id="back-btn"><FontAwesomeIcon icon={faAngleLeft} /></Link>
      <div className="wrapper">
      <div className="box-one">
        <h1 className="sign-up-title">Sign up</h1>
        <form className="signin">
            <input className="login-input" type="text" placeholder="Avatar name"/>
            <input className="login-input" type="text" placeholder="Enter email..."/>
            <input className="login-input" type="password" placeholder="Password..."/>
          <button className="submit" type="submit">Sign up</button>
          <hr/>
          <small> Or sign up with </small>
          <div id="or-sign">
            <Link to="/" className="sign-btn"><FontAwesomeIcon icon={faFacebook} /></Link>
            <Link to="/" className="sign-btn"><FontAwesomeIcon icon={faInstagram} /></Link>
            <Link to="/" className="sign-btn"><FontAwesomeIcon icon={faEnvelope} /></Link>
          </div>
        </form>
      </div>
    </div>
    </div>
    )
  }
}

export default SignIn;
