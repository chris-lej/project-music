import React from 'react';
import PropTypes from 'prop-types';

export const VideoView = (props) => (
  <div>
    {props.searchTermExists
      ? <div className="float-right">
        <iframe title="Video Player" className="embed-responsive-item" src={props.videoUrl} />
      </div>
      : <div>No Video Yet</div>
    }
  </div>
);

VideoView.propTypes = {
  searchTermExists: PropTypes.bool.isRequired,
  videoUrl: PropTypes.string.isRequired
};

export default VideoView;
