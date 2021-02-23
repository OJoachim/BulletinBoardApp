import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AssignmentIcon from '@material-ui/icons/Assignment';

class Component extends React.Component {

  state = {
    authStatus: 'not logged',
  }
  handleChange = e => {
    this.setState({
      authStatus: e.target.value,
    });
  };

  render() {

    return (
      <>
        <div>
          <Button className={styles.link} component={NavLink} exact to={`/`} activeClassName='active'><AssignmentIcon /></Button>
        </div>
        <select value={this.state.authStatus} onChange={this.handleChange}>
          <option value="logged">logged</option>
          <option value="not logged">not logged</option>
          <option value="admin">admin</option>
        </select>
        {this.state.authStatus !== 'not logged'
          ?
          <nav className={styles.component}>
            <Button className={styles.link} component={NavLink} exact to={`/post/myposts`} activeClassName='active'>My Posts</Button>
            <Button className={styles.link} component={NavLink} exact to={`/post/add`} activeClassName='active'>Add Post</Button>
            <Button className={styles.link} component={NavLink} exact to={`/`} activeClassName='active'>Log out</Button>
          </nav>
          :
          <nav className={styles.component}>
            <Button className={styles.link} href='https://google.com' activeClassName='active'>Log in</Button>
          </nav>
        }
      </>
    );
  }
}

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
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
