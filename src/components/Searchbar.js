import React from 'react';
import './searchbar.css';
import {Link} from 'react-router-dom';
import logo from './img/logo.png';

const SearchBar = (props) => {
    return (
      <div className="nav">
        <img className="logo" src={logo} alt="Logo" />
        <form className="form" onSubmit={props.getMovies} autoComplete="off">
          <input className="search" name="search" type="text" placeholder="Search"/>
          <input className="search-submit" type="submit"/>
        </form>
          <Link className="sign" to='/signin'> Sign in</Link>
      </div>
    )
  }

export default SearchBar;
