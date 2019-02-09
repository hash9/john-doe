import React from 'react';
import Routes from './pages/base/routes';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/Home/Components/Home';
import PostItem from './pages/Posts/PostItem'

const App = () => (
  <div>
    <BrowserRouter>
      {/* <Routes /> */}
      <div>
      <Route path="/" exact component={Home}/>
      <Route path="/itemone" component={PostItem}/>
      </div>
    </BrowserRouter>
  </div>
)
export default App;
