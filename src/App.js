import './App.css';
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom'
import About from './pages/About/About';
import Home from './pages/Home/Home'
import Content from './pages/Content/Content';
import Booking from './pages/Booking/Booking'
import NavBar from "./components/NavBar/NavBar";
import React from "react";

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/booking'>
          <Booking />
        </Route>

        <Route path='/content'>
          <Content />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
