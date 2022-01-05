import React from 'react';
import Loader from '../Components/Loader';
import Movies from '../Components/Movies';
import Search from '../Components/Search';

export default class Main extends React.Component {

  state = {
    movies: [],
    loading: true,
  }

  componentDidMount() { // bu dastlabki holat uchun
    fetch('http://www.omdbapi.com/?apikey=2d48fd78&s=panda')
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
  }

  findMovies = (str, type = '') => { // find and filter holatlari
    this.setState({ loading: true })
    fetch(`http://www.omdbapi.com/?apikey=2d48fd78&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
  }
  render() {
    return (
      <div className="content container">
        <Search findMovies={this.findMovies} />
        {this.state.loading ? (<Loader />) : <Movies movies={this.state.movies} />}
      </div>
    )
  }
}