import React from 'react';
import { connect } from 'react-redux';
import {push} from "react-router-redux";
import {bindActionCreators} from "redux";
import { tabsRequestGet, tabsObjects, tabsExist, tabsIsLoading } from '../../modules/tabs-module';
import { searchMusicArtist, searchLastArtist, searchLastSong } from '../../modules/music-module';
import './tab.css'

const mapStateToProps = (state) => ({
  tabsObjects: tabsObjects(state),
  tabsExist: tabsExist(state),
  searchMusicArtist: searchMusicArtist(state),
  lastArtist: searchLastArtist(state),
  lastSong: searchLastSong(state),
  tabsIsLoading: tabsIsLoading(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  tabsRequestGet,
  changePage: () => push('/about-us')
}, dispatch);

class Tab extends React.Component{

  tabByArtist = (artist) => {
    const tabsObject = this.props.tabsObjects;
    const toSearch = artist;
    const matchingArtistTab = (tabsObject.find(o => o.authors.some(x => x.name === toSearch)) || {body_chords_html: ""}).body_chords_html;
    const suggestedArtists = tabsObject.map(songs => songs.authors.map(author =>
    //TODO: Add the link for each artists song. New Api call necessary?
      <p>
        <a href="#" key={author.name}>{author.name}</a>
      </p>));

    if ( matchingArtistTab.length ) {

      return <div className="content" dangerouslySetInnerHTML={{__html: matchingArtistTab}} />
    }

    return (
      <div>
        Tab not found because of artist, here is a list of artists with that song
        {suggestedArtists}
      </div>
    )
  };

  render = () =>  {
    return (
      <div>
        {this.props.tabsIsLoading
        ? <div>
            Loading...
          </div>
        : <div>
            {this.props.tabsExist && !this.props.tabsIsLoading
              ? <div>
                {this.tabByArtist(this.props.lastArtist)}
              </div>
              :<div>
                {this.props.lastArtist.length || this.props.lastSong.length
                  ? "We couldn't find anything with that crappy search you did"
                  : "Tab will be displayed here"
                }
              </div>
            }
          </div>
        }

      </div>
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab);


