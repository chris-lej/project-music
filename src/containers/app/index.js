import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import NavBar from '../nav-bar';

const App = () => (
  <div>
    <header>
      <NavBar />
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);


export default App;
