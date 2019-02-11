import React from 'react';
import Proptypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Container from './Home.container';

const HomePage = ({ history }) => (
  <div>
    <Container history={history} />
  </div>
);

HomePage.propTypes = {
  history: Proptypes.object,
};

HomePage.defaultProps = {
  history: {},
};


export default withRouter(HomePage);
