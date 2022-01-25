import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import NoMatch from './components/NoMatch';

function App(){
  return (
      <Router>
        <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={AboutMe} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/resume" component={Resume} />
              <Route component={NoMatch} />
            </Switch>
        </div>
      </Router>
    );
}

export default App;
