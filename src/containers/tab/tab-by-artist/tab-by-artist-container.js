import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import TabByArtistView from './tab-by-artist-view';

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch);

class TabContainer extends React.Component {
  matchingArtistTab = (this.props.tabsObjects.find(o =>
    o.authors.some(x =>
      x.name === this.props.lastArtist)) || {body_chords_html: ''}).body_chords_html;

  render = () =>
    <TabByArtistView
      suggestArtists={!this.matchingArtistTab.length}
      tabsObject={this.props.tabsObjects}
      showTab={!!this.matchingArtistTab.length}
      matchingArtistTab={this.matchingArtistTab}
    />;
}

TabContainer.propTypes = {
  tabsObjects: PropTypes.object.isRequired,
  lastArtist: PropTypes.string.isRequired
};

export default connect(mapDispatchToProps)(TabContainer);
