import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
import Typography from '@material-ui/core/Typography';

import {connect} from 'react-redux';
import {getAll} from '../../../redux/postsRedux.js';

class Component extends React.Component {

  render () {
    const { className, children, posts } = this.props;
    return (
      <Paper className={ clsx( className, styles.root ) }>
        <h2>Bulletin Board</h2>
        <div className={ styles.cardContainer }>
          { posts.length ? posts.sort( ( post1, post2 ) => {
            const date1 = new Date( post1.updated );
            const date2 = new Date( post2.updated );
            return date2.getTime() - date1.getTime();
          } ).map( post => (
            <Card className={ styles.card } key={ post.id } >
              <CardContent>
                <Typography className={ styles.title } color="textSecondary" gutterBottom>
                  { post.created }
                </Typography>
                <Typography variant="h6" component="h2">
                  { post.title }
                </Typography>
                <Button color={ 'primary' } fullWidth className={ styles.button } component={ Link } exact to={ `/post/${ post.id }` } >
                  Find Out More <ChevronRightRounded />
                </Button>
              </CardContent>
            </Card>
          ) ) : ( <p>There are no texts for this moment</p> ) }
          { children }
        </div>
      </Paper>
    );
  }
}
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
};

const mapStateToProps = state => ( {
  posts: getAll( state ),
} );

const Container = connect( mapStateToProps )( Component );

export {
  Container as Homepage,
  Component as HomepageComponent,
};
