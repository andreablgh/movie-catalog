import React, {Component} from 'react';
import './movies.css'
import Movie from './Movie'
import {Link} from 'react-router-dom'

class Movies extends Component {
  render() {
    if (this.props.getDet === true) {
      return(<Movie movie={this.props.movie}/>)
    }
    return(
      this.props.movie.map(res => {
        const src = `https://image.tmdb.org/t/p/w154${res.poster_path}`
        return (
        <Link key={res.id} to={`/movies/${res.id}`} className="card">
          <div className="card">
            <img alt="poster" src={src}/>
            <div className="card-details">
              <p className="card-title">{res.title}</p>
            </div>
          </div>
        </Link>
        )
      })
    )
  }
  }


export default Movies;
