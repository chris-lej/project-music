import React from 'react';
import { connect } from 'react-redux';
import {
  updateArtist,
  updateSong,
  searchMusicSong,
  searchMusicArtist,
  updateLastArtist,
  updateLastSong,
  searchLastArtist,
  searchLastSong,
  toggleAcoustic,
  toggleLesson
} from "../../modules/music-module";
import {push} from "react-router-redux";
import {bindActionCreators} from "redux";
import {tabsRequestGet} from "../../modules/tabs-module";

const mapStateToProps = state => ({
  song: searchMusicSong(state),
  artist: searchMusicArtist(state),
  lastArtist: searchLastArtist(state),
  lastSong: searchLastSong(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleLesson,
  toggleAcoustic,
  updateSong,
  updateArtist,
  tabsRequestGet,
  updateLastArtist,
  updateLastSong,
  changePage: () => push('/about-us')
}, dispatch);

class SearchBar extends React.Component {

  formatSearchTerm = (term) => {
    return term.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  handleArtistChange = (e) => {
    const artist = this.formatSearchTerm(e.target.value);
    this.props.updateArtist(artist);
  };

  handleSongChange = (e) => {
    const song = this.formatSearchTerm(e.target.value);
    this.props.updateSong(song);
  };

  handleSearch = (e) => {
    this.props.updateLastArtist(this.props.artist);
    this.props.updateLastSong(this.props.song)
      .then(() => {
        this.props.tabsRequestGet(this.props.lastSong)
      })
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
        <label>
          Acoustic
          <input
            type="checkbox"
            name="acoustic"
            onChange={this.props.toggleAcoustic}
          />
        </label>
        <label>
          Lesson
          <input
            type="checkbox"
            name="lesson"
            onChange={this.props.toggleLesson}
          />
        </label>
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
