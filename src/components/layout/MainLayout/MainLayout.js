import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../Header/Header';
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

import styles from './MainLayout.module.scss';

const Component = ( { className, children } ) => (
  <div className={ clsx( className, styles.root ) }>
    < AppBar>
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <Header />
        </Toolbar>
      </Container>
    </AppBar>
    <Container maxWidth='lg'>
      <Toolbar />
      <Toolbar />
      { children }
    </Container>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as MainLayout,
  Component as MainLayoutComponent,
};