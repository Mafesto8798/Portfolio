import React from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home'
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
   <Router>
     <Nav />
     <Route path="/" exact component={Home} />
   </Router>
  );
}

export default App;