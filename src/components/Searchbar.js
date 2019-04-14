import React from 'react';
import './searchbar.css';
import {Link} from 'react-router-dom';

const SearchBar = (props) => {
    return (
      <div className="nav">
        <form className="form" onSubmit={props.getMovies} autoComplete="off">
          <input className="search" name="search" type="text" placeholder="Search"/>
          <input className="search-submit" type="submit"/>
        </form>
          <Link className="sign" to='/signin'> Sign in</Link>
      </div>
    )
  }

export default SearchBar;
