import React from 'react';
import SearchBar from '../search-bar';
import Tab from '../tab';
import Video from '../video'
import { Button } from 'reactstrap'
import './home.css'

export class Home extends React.Component {

  startScroll = () => {
    window.scrollBy(0,1);
    setTimeout(this.startScroll, 150);
  };
  stopScroll = () => {
    window.scrollTo(0,0);
  };

  render = () => (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Home</h1>
        </div>
        <div className="col">
          <Button
            color="primary"
            type="button"
            onClick={this.startScroll} >
            Scroll
          </Button>
          <Button
            color="primary"
            type="button"
            onClick={this.stopScroll} >
            Stop
          </Button>
        </div>
      </div>
      <div className="row">
        <div className='col'>
          <SearchBar />
        </div>
      </div>
      <div className="row tab-video-container">
        <div className="col">
          <Tab />
        </div>
        <div className="col">
          <Video />
        </div>
      </div>
    </div>
  );
}

export default Home;
