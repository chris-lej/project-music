import React from 'react';
import PropTypes from 'prop-types';
import './tab-by-artist.css';

export const TabByArtistView = (props) => (
  <div>
    {props.suggestArtists &&
      <div>Suggested Artists Title Message</div>
    }
    {props.suggestArtists &&
      props.tabsObject.map((songs) => songs.authors.map((author) =>
        <p key={`link-${author.name}`}>
          <a href="#">{author.name}</a>
        </p>
      ))
    }
    {props.showTab &&
    // eslint-disable-next-line react/no-danger
      <div className="content" dangerouslySetInnerHTML={{__html: props.matchingArtistTab}} />
    }
  </div>
);

TabByArtistView.propTypes = {
  suggestArtists: PropTypes.bool.isRequired,
  showTab: PropTypes.bool.isRequired,
  matchingArtistTab: PropTypes.any.isRequired,
  tabsObject: PropTypes.array.isRequired
};

export default TabByArtistView;
