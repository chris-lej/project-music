import React from 'react';
import { connect } from 'react-redux';
import { youtubeSearchTree } from '../../modules/youtube-module'

const mapStateToProps = (state) => ({
  youtubeSearchTree: youtubeSearchTree(state)
});

class Video extends React.Component{

  getVideo = () => {
    const videoId = this.props.youtubeSearchTree[0].id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div className="float-right">
        <iframe title='Video Player' className="embed-responsive-item" src={url} />
      </div>
    )
  };

  render = () =>  {
    return (
      <div>
        {this.props.youtubeSearchTree.length
        ? this.getVideo()
        : <div>No Video Yet</div>
        }
      </div>




    );
  };
}

export default connect(mapStateToProps)(Video);


