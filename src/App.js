import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      dfd
      <Router>

        

          <Route path="/" component={<Home />} />
          <Route path="/About" component={About} />
          <Route path="/Shop" component={Shop} />
        
      </Router>
    </div>
  );
}
const Home = () => {
  return (<div>
    <h1>Home Page</h1>
  </div>)
}
export default App;