import React from 'react';
import PropTypes from 'prop-types'

class VideoView extends React.Component {

  render = () =>  {
    return (
      <div>
        {this.props.searchTermExists
          ? <div className="float-right">
            <iframe title='Video Player' className="embed-responsive-item" src={this.props.videoUrl} />
          </div>
          : <div>No Video Yet</div>
        }
      </div>
    );
  };
}


VideoView.propTypes = {
  searchTermExists: PropTypes.bool,
  videoUrl: PropTypes.string
};

export default VideoView;


