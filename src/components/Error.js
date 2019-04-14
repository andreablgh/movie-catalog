import React from 'react';
import {Link} from 'react-router-dom'
import './error.css'

const Error = () => {
    return (
      <div className="loading">
        <h1> Ooops, looks like the page you were looking for doesn't exist.</h1>
        <Link to="/" className="back-to">Back to browsing</Link>
      </div>
    )
  }

  export default Error;
