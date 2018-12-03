import React from 'react';
import { connect } from 'react-redux';
import { youtubeSearchTree } from '../../modules/youtube-module'
import VideoView from './video-view';

const mapStateToProps = (state) => ({
  youtubeSearchTree: youtubeSearchTree(state)
});

class VideoContainer extends React.Component {
  getVideo = () => {
    if (this.props.youtubeSearchTree.length) {
      const videoId = this.props.youtubeSearchTree[0].id.videoId;
      const url = `https://www.youtube.com/embed/${videoId}`;

      return (
        url
      );
    }
  };

  render = () => (
    <VideoView
      searchTermExists={!!this.props.youtubeSearchTree.length}
      videoUrl={this.getVideo()}
    />
  );
}

export default connect(mapStateToProps)(VideoContainer);
