import React, {Component} from 'react';
import './sidebar.css'
import Selection from './Selection'


class Sidebar extends Component {
//getting the genres from the database
  componentDidMount() {
      fetch(this.props.genUrl)
        .then(data => data.json())
        .then(gen => this.props.setGen(gen.genres))
        .catch(error => console.log(error))
      }

  render() {
    const { genre, genres, onGenChange, onClickGen } = this.props;
    return(
      <Selection
        genre={genre}
        genres={genres}
        onGenChange={onGenChange}
        onClickGen={onClickGen}
      />
    )
  }
}

export default Sidebar;
