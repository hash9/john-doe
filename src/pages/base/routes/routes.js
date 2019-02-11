import React, { Suspense } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import history from './history';
import Home from '../../Home/Components/Home'
import Resume from '../../Resume/Components/Resume'
import PostItem from '../../Posts/PostItem'

// routes
const Routes = () => (
  <Router history={history}>
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Route path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/item1" component={PostItem} /> */}
      </Suspense>
    </Switch>
  </Router>
);

export default Routes;