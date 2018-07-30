import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

export const SearchBarView = (props) => (
  <form
    className="form-group"
    onSubmit={props.handleSubmit}>
    <input
      type="text"
      name="artist"
      placeholder="Artist Name"
      onChange={props.handleArtistChange}
    />
    <input
      type="text"
      name="song"
      placeholder="Song Name"
      onChange={props.handleSongChange}
    />
    <label>
      Acoustic
      <input
        type="checkbox"
        name="acoustic"
        onChange={props.toggleAcoustic}
      />
    </label>
    <label>
      Lesson
      <input
        type="checkbox"
        name="lesson"
        onChange={props.toggleLesson}
      />
    </label>
    <Button
      color="primary"
      type="button"
      onClick={props.handleSearch}
    >
      Search
    </Button>
  </form>
);

SearchBarView.propTypes = {
  toggleAcoustic: PropTypes.func.isRequired,
  toggleLesson: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
  handleArtistChange: PropTypes.func.isRequired,
  handleSongChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired
};

export default SearchBarView;
