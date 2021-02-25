import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './NotFound.module.scss';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const Component = ({className}) => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
  >
    <div className={clsx(className, styles.root)}>
      <h2>The page is not fount... :(  </h2>
      <Button variant="contained" color="primary" component={Link} to={'/'}>Go back to Homepage</Button>
    </div>
  </Grid>
);

Component.propTypes = {
  //children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

const mapStateToProps = state => ({
  notFound: state.notFound,
});

const Container = connect(mapStateToProps)(Component);

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });
// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as NotFound,
  Container as NotFound,
  Component as NotFoundComponent,
};
