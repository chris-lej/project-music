import React from 'react';
import { connect } from 'react-redux';
import {
  updateArtist,
  updateSong,
  searchMusicSong,
  searchMusicArtist
} from "../../modules/music-module";
import {push} from "react-router-redux";
import {bindActionCreators} from "redux";
import {tabsRequestGet} from "../../modules/tabs-module";

const mapStateToProps = state => ({
  song: searchMusicSong(state),
  artist: searchMusicArtist(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateSong,
  updateArtist,
  tabsRequestGet,
  changePage: () => push('/about-us')
}, dispatch);

class SearchBar extends React.Component {

  handleArtistChange = (e) => {
    this.props.updateArtist(e.target.value)
  };

  handleSongChange = (e) => {
    this.props.updateSong(e.target.value)
  };

  handleSearch = (e) => {
    this.props.tabsRequestGet(this.props.song)
  };

  render() {
    return (
      <form ref="searchForm" className="form-group" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Artist Name"
          onChange={this.handleArtistChange}
        />
        <input
          type="text"
          name="song"
          placeholder="Song Name"
          onChange={this.handleSongChange}
        />
        <button
          type="button"
          onClick={this.handleSearch}
          >
        Search
        </button>
      </form>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
