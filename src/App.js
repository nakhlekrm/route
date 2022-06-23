import './App.css';
import React from 'react'
import Home from './Pages/Home';
import About from './Pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './Pages/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <Router>
    <div>
      
  
  
        <Routes>
        <Route path="/Home" element={<Home />}>
        </Route>
        <Route path="/About" element={<About />}>
        </Route>
        <Route path="/Shop" element={<Shop />}>
        </Route>
        </Routes>

    </div >

    </Router>
  )
}
export default App;