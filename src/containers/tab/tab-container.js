import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {
  tabsExist, tabsIsLoading, tabsObjects, tabsRequestGet,
} from '../../modules/tabs-module';
import {
  searchLastArtist, searchLastSong, searchMusicArtist,
} from '../../modules/music-module';
import TabByArtist from './tab-by-artist';
import TabDefault from './tab-default';
import TabNotFound from './tab-not-found';
import Loader from '../loader';

const mapStateToProps = (state) => ({
  tabsObjects: tabsObjects(state),
  tabsExist: tabsExist(state),
  searchMusicArtist: searchMusicArtist(state),
  lastArtist: searchLastArtist(state),
  lastSong: searchLastSong(state),
  tabsIsLoading: tabsIsLoading(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  tabsRequestGet,
  changePage: () => push('/about-us'),
}, dispatch);

export const TabContainer = (props) => {
  if (props.tabsIsLoading) {
    return <Loader />;
  } if (props.tabsExist && !props.tabsIsLoading) {
    return (
      <TabByArtist
        tabsObjects={props.tabsObjects}
        tabsIsLoading={props.tabsIsLoading}
        lastArtist={props.lastArtist}
      />
    );
  } if ((props.lastArtist.length || props.lastSong.length) && !props.tabsIsLoading) {
    return <TabNotFound />;
  } return <TabDefault />;
};

TabContainer.propTypes = {
  tabsIsLoading: PropTypes.bool.isRequired,
  tabsExist: PropTypes.bool.isRequired,
  tabsObjects: PropTypes.array.isRequired,
  lastArtist: PropTypes.string.isRequired,
  lastSong: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TabContainer);
