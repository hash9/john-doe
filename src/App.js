import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';
import PostItem from './pages/Posts/PostItem'

const App = () => (
  <div>
    <BrowserRouter>
      {/* <Routes /> */}
      <div>
        <Route path="/" exact component={Home}/>
        <Route path="/itemone" component={PostItem}/>
        <Route path="/resume" component={Resume} />
      </div>
    </BrowserRouter>
  </div>
)
export default App;
