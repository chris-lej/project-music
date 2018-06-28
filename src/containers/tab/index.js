import React from 'react';
import { connect } from 'react-redux';
import {push} from "react-router-redux";
import {bindActionCreators} from "redux";
import { tabsRequestGet, tabsObjects, tabsExist, tabsIsLoading } from '../../modules/tabs-module';
import { searchMusicArtist, searchLastArtist } from '../../modules/music-module';

const mapStateToProps = (state) => ({
  tabsObjects: tabsObjects(state),
  tabsExist: tabsExist(state),
  searchMusicArtist: searchMusicArtist(state),
  lastArtist: searchLastArtist(state),
  tabsIsLoading: tabsIsLoading(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  tabsRequestGet,
  changePage: () => push('/about-us')
}, dispatch);

class Tab extends React.Component{

  tabByArtist = (artist) => {
    const obj = this.props.tabsObjects;

    let toSearch = artist;
    let result = (obj.find(o => o.authors.some(x => x.name === toSearch)) || {body: ""}).body;

    if ( result.length ) {
      return result
    } else
    return (
      <div>
        Tab not found. Please try again.
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
                Tab will be displayed here
              </div>
            }
          </div>
        }

      </div>
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab);


