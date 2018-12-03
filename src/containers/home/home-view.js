import React from 'react';
import SearchBar from '../search-bar';
import Tab from '../tab';
import Video from '../video';
import './home.css';

const HomeView = () => (
  <div className="container m-0">
    <div className="row">
      <div className="col">
        <h1>Home</h1>
      </div>
      <div className="col" />
    </div>
    <div className="row">
      <div className="col">
        <SearchBar />
      </div>
    </div>
    <div className="row tab-video-container w-100">
      <div className="col">
        <Tab />
      </div>
      <div className="col">
        <Video />
      </div>
    </div>
  </div>
);

// @TODO Make scroll button that allow to auto-scroll and stop auto-scroll
// import { Button } from 'reactstrap'
// startScroll = () => {
//   window.scrollBy(0,1);
//   setTimeout(this.startScroll, 150);
//   return (
//     <Button
//       color="primary"
//       type="button"
//       onClick={this.startScroll} >
//       Scroll
//     </Button>
//   )
// };
//
// stopScroll = () => {
//   window.scrollTo(0,0);
//   return (
//     <Button
//       color="primary"
//       type="button"
//       onClick={this.stopScroll} >
//       Stop
//     </Button>
//   )
// };

export default HomeView;
