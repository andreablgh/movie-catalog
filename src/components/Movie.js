import React, {Component} from 'react';
import './movie.css'


const API_KEY = 'c49845d540467af838bcfec4d5ac0671';

class Movie extends Component {
  state = {
    movie: []
  }

  componentDidMount() {
    let id = this.props.match.params.movie_id;
    console.log(this.props.match)
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then(resp => resp.json())
      .then(data => this.setState({
        movie: data
      }, () => console.log(data)))
      .catch(error => console.log(error))
  }

  render() {
    const {poster_path, release_date, runtime, vote_average, vote_count, backdrop_path} = this.state.movie
    const releaseYear = release_date ? release_date.substring(0, 4) : null
      const src = `https://image.tmdb.org/t/p/w780/${poster_path}`
        return (
          <div>
            <div key={this.state.movie.title} className="detail-card">
              <div className="detail-container">
                <img className="poster" src={src} alt="bposter"/>
                <div className="details">
                <div className="title">
                  <h1 id="movie-title">{this.state.movie.title}</h1>
                  <p> {vote_average} </p>
                  <small>{vote_count} vote</small><hr/>
                </div>
              <div className="movie-details">
                <span> {releaseYear} </span>
                <span className="wall">|</span>
                <span> Runtime: {runtime} min </span>
                <span className="wall">|</span>
                <span> Genres: bla blabla </span>
                <span className="wall">|</span>
              </div>
              <div className="overview">
                <h3>Overview</h3>
                  <p>{this.state.movie.overview}</p>
              </div>
              </div>
              </div>
            </div>
          </div>
          )
    }
  }

export default Movie;
