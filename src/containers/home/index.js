import React from 'react';
import SearchBar from '../search-bar';
import Tab from '../tab';
import './home.css'

export class Home extends React.Component {

  render = () => (
    <div>
      <h1>Home</h1>
      <SearchBar />
      <Tab />
    </div>
  );
}

export default Home;
