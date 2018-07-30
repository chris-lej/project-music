import React from 'react';
import { connect } from 'react-redux';
import './tab.css';
import {tabsExist, tabsIsLoading, tabsObjects, tabsRequestGet} from "../../modules/tabs-module";
import {searchLastArtist, searchLastSong, searchMusicArtist} from "../../modules/music-module";
import {push} from "react-router-redux";
import {bindActionCreators} from "redux";
import TabView from './tab-view';
import Loader from '../loader'

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

class TabContainer extends React.Component{

  returnContent = () => {
    console.log(this.props.tabsIsLoading)
    return (
      this.props.tabsExist && !this.props.tabsIsLoading
        ? this.tabByArtist(this.props.lastArtist)
        : <div>
          {(this.props.lastArtist.length || this.props.lastSong.length) && !this.props.tabsIsLoading
            ? "We couldn't find anything with that crappy search you did"
            : "Tab will be displayed here"}
        </div>
    );
  }

  banana = () => {
    if (this.props.tabsIsLoading) {
      return <Loader />
    } else if (this.props.tabsExist && !this.props.tabsIsLoading) {
      return this.tabByArtist(this.props.lastArtist)
    } else if ((this.props.lastArtist.length || this.props.lastSong.length) && !this.props.tabsIsLoading) {
      return <div> We couldn't find anything with that crappy search you did </div>
    } return <div> Tab will be displayed here bro </div>
  };

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
      <TabView
        content={this.banana()}
      />
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TabContainer);


