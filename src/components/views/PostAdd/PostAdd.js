import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PostAdd.module.scss';

const Component = ({className, children}) => (
  <Paper className={styles.root}>
    <h2>Add new post</h2>
    <form className={clsx(className, styles.form)}>
      <TextField className={styles.title} id='title' label='Title' variant='outlined' InputProps={{minLength: 10}} required fullWidth />
      <TextField className={styles.advert} id='advert' label='Advert' variant='outlined' InputProps={{minLength: 20}} required fullWidth />
      <TextField className={styles.price} id='price' label='Price' variant='outlined' type='number' InputProps={{
        startAdornment: <InputAdornment position='start'>$</InputAdornment>,
      }} defaultValue='0' />
      <TextField className={styles.phone} id='phone' label='Phone' variant='outlined' />
      <TextField className={styles.location} id='location' label='Location' variant='outlined' />
      <TextField className={styles.mail} id='email' label='E-mail' variant='outlined' required fullWidth />
      <TextField className={styles.image} id='image' variant='outlined' fullWidth />
      <Button className={styles.submit}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        component={Link} to={'/'}>
        Submit
      </Button>
    </form>
  </Paper>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as PostAdd,
  // Container as PostAdd,
  Component as PostAddComponent,
};
