import React from 'react';

export default class Search extends React.Component {
  state = {
    search: 'panda',// default berib qoymaseg bosh ketib qoladi
    type: 'all',
  }

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.findMovies(this.state.search, this.state.type)
    }
  }

  handleFilter = (e) => { // special for filter
    this.setState(() => ({ type: e.target.dataset.type }), () => {
      this.props.findMovies(this.state.search, this.state.type)
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input placeholder="Search" type="email" className="validate"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey} />
            <button className="btn search-btn" onClick={() => this.props.findMovies(this.state.search, this.state.type)}
            >Search</button>
          </div>

          <div>
            <label>
              <input className="with-gap" name="type" type="radio" data-type="all" onChange={this.handleFilter} checked={this.state.type === 'all'} />
              <span>All</span>
            </label>
            <label>
              <input className="with-gap" name="type" type="radio" data-type="movie" onChange={this.handleFilter} checked={this.state.type === 'movie'} />
              <span>Movies only</span>
            </label>
            <label>
              <input className="with-gap" name="type" type="radio" data-type="series" onChange={this.handleFilter} checked={this.state.type === 'series'} />
              <span>Series only</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}