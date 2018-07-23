import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

export class SearchBarView extends React.Component {
  render = () => (
    <form
      ref="searchForm"
      className="form-group"
      onSubmit={this.props.handleSubmit}>
      <input
        type="text"
        name="artist"
        placeholder="Artist Name"
        onChange={this.props.handleArtistChange}
      />
      <input
        type="text"
        name="song"
        placeholder="Song Name"
        onChange={this.props.handleSongChange}
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
      <Button
        color="primary"
        type="button"
        onClick={this.props.handleSearch}
      >
        Search
      </Button>
    </form>
  )
}

SearchBarView.propTypes = {
  toggleAcoustic: PropTypes.func.isRequired,
  toggleLesson: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
  handleArtistChange: PropTypes.func.isRequired,
  handleSongChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired
};

export default SearchBarView;
