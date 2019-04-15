import React, { Component } from 'react';
import '../App.css';
import SearchBar from './Searchbar';
import Sidebar from './Sidebar';
import Movies from './Movies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


const API_KEY = 'c49845d540467af838bcfec4d5ac0671';

class Main extends Component {
  state = {
    genUrl: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US.`,
    movie: [],
    getDet: false,
    genre: "Popular",
    genres: [],
    page: 1,
    total_pages: 1,
    moviesUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  }

//fetching the movies when searching
  getMovies = async (e) => {
    e.preventDefault();
    const search = e.target.elements.search.value;
    const api_call = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${this.state.page}&include_adult=false`);
    const data = await api_call.json();
    console.log(data);
    const result = data.results;
    console.log(result)
    if (result) {
      this.setState ({
        movie: result,
        total_pages: data.total_pages,
        page: 1
        })
    } else  {
        alert('Please make sure you typed something')
    }
  }

//when the page loads, the daily popular movies are the first the user sees
componentDidMount(e) {
  fetch(this.state.moviesUrl)
    .then(dt => dt.json())
    .then(json => json.results)
    .then(json => {
      this.setState({
        movie: json
      })
    })
    .catch(error => console.log(error))
  }

//setting the movie details
  getDetail = () => {
    this.setState({
      getDet: true
    })
  }

//setting the genre
  onGenChange = e => {
      this.setState({
        genre: e.target.value
      })

    }
//setting the genres from the movie database
  setGen = genres => {
      this.setState({
        genres: genres
      })
    }

//setting the state to the click value, then firing the new url function
  onClickGen = e => {
    let value = e.target.getAttribute('value')
      this.setState({
        genre: value
      }, () => {this.getNewUrl()})
      this.setState({
        page: 1
      })
    }

//fetching the movies by genre
  sortbyGenre = (moviesUrl) => {
    fetch(this.state.moviesUrl)
    .then(data => data.json())
    .then(uff => this.setState({
      movie: uff.results,
      total_pages: uff.total_pages
    }))
}

//generating a new url for the movie list
  getNewUrl = () => {
    const selected = this.state.genres.find(gen => gen.name === this.state.genre)
    console.log(selected)
    const id = selected.id
    const page = this.state.page
    const moviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=${id}&page=${page}`
    this.setState({
      moviesUrl: moviesUrl
    }, () => {this.sortbyGenre()})
  }

  nextPage = () => {
    let nextPg = this.state.page +1;
    if (nextPg <= this.state.total_pages) {
      this.setState({
        page: nextPg
      }, () => this.getNewUrl())
    }
  }

  prevPage = () => {
    console.log("You clicked")
    let nextPg = this.state.page -1;
    if (nextPg > 0) {
      this.setState({
        page: nextPg
      }, () => this.getNewUrl())
    }
  }

  render() {
    const {page} = this.state
    return (
    <div className="App">
        <SearchBar getMovies={this.getMovies}/>
        <Sidebar
          onGenChange={this.onGenChange}
          setGen={this.setGen}
          onClickGen={this.onClickGen}
          genres={this.state.genres}
          genUrl={this.state.genUrl}
        />
      <div className="container">
        <h1 id="genre-title"> {this.state.genre} </h1>
        <Movies
          movie={this.state.movie}
          getDetail={this.getDetail}
          getDet={this.state.getDet}
          moviesUrl={this.state.moviesUrl}
          genUrl={this.state.genUrl}
          sortbyGenre={this.sortbyGenre}
          genre={this.state.genre}
        />
        <div className="pagination">
          <button className="btn" onClick={this.prevPage}><FontAwesomeIcon className="btn-icon" icon={faAngleLeft} /></button>
            <span id="page-nr"> {page} </span>
          <button className="btn" onClick={this.nextPage}><FontAwesomeIcon className="btn-icon" icon={faAngleRight} /></button>
        </div>
      </div>
    </div>
    );
  }
}


export default Main;
