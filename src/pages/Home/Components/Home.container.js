import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as homeActions from 'pages/Home/Home.actions';
// import { getInventory } from 'pages/Home/Home.selectors';
import Home from './Home';

const Container = props => (
  <Home {...props} />
);

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch),
  };
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
