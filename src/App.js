import React from 'react';
import Nav from './Components/Nav';
import Projects from './Components/Projects'
import Home from './Components/Home'
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
   <Router>
     <Nav />
     <Route path="/" exact component={Home} />
     <Route path="/projects" component={Projects} />
   </Router>
  );
}

export default App;