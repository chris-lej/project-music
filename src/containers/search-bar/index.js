import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <form ref="searchForm" className="form-group">
        <label>Artist</label>
        <input
          type="text"
          className="form-control"
          ref="search"
        />
        <label>Music</label>
        <input
          type="text"
          className="form-control"
          ref="song"
        />
        <span className="input-group-btn">
          <button
            className="btn btn-default"
            type="type"
            onClick={this.props.updateMusic}
          >Go!</button>
        </span>
      </form>
    )
  }
}

export default SearchBar;
