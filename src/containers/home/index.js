import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  decrement,
} from '../../modules/counter';
import { tabsRequestGet } from '../../modules/tabs-module';
import { updateArtist, updateSong } from '../../modules/music-module';
import SearchBar from '../search-bar';

export class Home extends React.Component {
  componentDidMount = () => {
    this.props.updateSong('Sublime');
    this.props.updateArtist('Sublime')
    this.props.tabsRequestGet('What I got')
  };

  // updateSong = (e) => {
  //   console.log('Song:', e.target.value);
  //   this.setState({
  //     song: e.target.value
  //   });
  // };

  updateMusic = (e) => {
    e.preventDefault();
    console.log('Updated:', e.target.value);
  };

  render = () => (
    <div>
      <h1>Home</h1>
      <p>Count: {this.props.count}</p>

      <p>
        <button onClick={this.props.increment} disabled={this.props.isIncrementing}>Increment</button>
      </p>

      <p>
        <button onClick={this.props.decrement} disabled={this.props.isDecrementing}>Decrementing</button>
      </p>

      <p><button onClick={() => this.props.changePage()}>Go to about page via redux</button></p>

      <SearchBar updateMusic={this.updateMusic}/>

    </div>
  );
}

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch => bindActionCreators({
  updateSong,
  updateArtist,
  tabsRequestGet,
  increment,
  decrement,
  changePage: () => push('/about-us')
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
