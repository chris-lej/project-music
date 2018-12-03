import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
  searchIsAcoustic,
  searchIsLesson,
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
} from '../../modules/music-module';
import { videoRequestGet } from '../../modules/youtube-module';
import { tabsRequestGet } from '../../modules/tabs-module';
import SearchBarView from './search-bar-view';

const mapStateToProps = (state) => ({
  song: searchMusicSong(state),
  artist: searchMusicArtist(state),
  lastArtist: searchLastArtist(state),
  lastSong: searchLastSong(state),
  isAcoustic: searchIsAcoustic(state),
  isLesson: searchIsLesson(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  videoRequestGet,
  toggleLesson,
  toggleAcoustic,
  updateSong,
  updateArtist,
  tabsRequestGet,
  updateLastArtist,
  updateLastSong,
  changePage: () => push('/about-us')
}, dispatch);

export class SearchBarContainer extends React.Component {
  formatSearchTerm = (term) => term.replace(/\w\S*/g, (txt) =>
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

  handleArtistChange = (e) => {
    const artist = this.formatSearchTerm(e.target.value);
    this.props.updateArtist(artist);
  };

  handleSongChange = (e) => {
    const song = this.formatSearchTerm(e.target.value);
    this.props.updateSong(song);
  };

  handleYoutubeQuery = (artist, song) => {
    let query = `${artist} ${song}`;
    if (this.props.isAcoustic) {
      query += ' acoustic';
    }
    if (this.props.isLesson) {
      query += ' guitar lesson';
    }
    this.props.videoRequestGet(query);
  };

  // eslint-disable-next-line no-unused-vars
  handleSearch = (e) => {
    this.props.updateLastArtist(this.props.artist);
    this.props.updateLastSong(this.props.song)
      .then(() => {
        this.props.tabsRequestGet(this.props.lastSong);
        this.handleYoutubeQuery(this.props.lastArtist, this.props.lastSong);
      });
  };

  render = () => (
    <SearchBarView
      toggleAcoustic={this.props.toggleAcoustic}
      toggleLesson={this.props.toggleLesson}
      handleSubmit={this.handleSubmit}
      handleArtistChange={this.handleArtistChange}
      handleSongChange={this.handleSongChange}
      handleSearch={this.handleSearch}
    />
  )
}

SearchBarContainer.propTypes = {
  toggleAcoustic: PropTypes.func.isRequired,
  toggleLesson: PropTypes.func.isRequired,
  tabsRequestGet: PropTypes.func.isRequired,
  artist: PropTypes.string.isRequired,
  lastArtist: PropTypes.string.isRequired,
  lastSong: PropTypes.string.isRequired,
  song: PropTypes.string.isRequired,
  updateSong: PropTypes.func.isRequired,
  updateArtist: PropTypes.func.isRequired,
  updateLastArtist: PropTypes.func.isRequired,
  updateLastSong: PropTypes.func.isRequired,
  videoRequestGet: PropTypes.func.isRequired,
  isLesson: PropTypes.bool.isRequired,
  isAcoustic: PropTypes.bool.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);
