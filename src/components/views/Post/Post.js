import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import { connect } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux.js';

import styles from './Post.module.scss';

class Component extends React.Component {

  state = {
    userData: { ...this.props.user },
  }


  render () {
    const { className, post } = this.props;
    return (
      <Paper className={ clsx( className, styles.root ) }>
        {post ? (
          <Card className={ styles.card }>
            <CardHeader className={ styles.header }
              avatar={ <Avatar className={ styles.avatar } component={ Link } to={ '/' }>
                <AssignmentIcon />
              </Avatar> }
              title={ post.title }
              subheader={ `Publication date: ${ post.created }, last update: ${ post.updated }` } />
            <CardContent>
              <div className={ styles.text }>
                <p className={ styles.content }> { post.text }</p>
              </div>
              <TableContainer className={ styles.table } component={ Paper }>
                <Table className={ styles.table }>
                  <TableBody>
                    <TableRow>
                      <TableCell>location</TableCell>
                      <TableCell align='right'>{ post.location }</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>price</TableCell>
                      <TableCell align='right'>{ post.price }</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>phone</TableCell>
                      <TableCell align='right'>{ post.phone }</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>e-mail</TableCell>
                      <TableCell align='right'>{ post.email }</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>status</TableCell>
                      <TableCell align='right'>{ post.status }</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
            <CardActions disableSpacing>
              { this.isPermitted() ? (
                <Button className={ styles.button }
                  variant="contained"
                  color="primary"
                  component={ Link } to={ `/post/${ post.id }/edit` }>
                  Edit your post
                </Button> ) : '' }
              <Button className={ styles.button }
                variant="contained"
                color="primary"
                component={ Link } to={ '/' }>
                Homepage
              </Button>
            </CardActions>
          </Card> ) : ( <p>Sorry, you are not permitted to edit this post. Go to  <Button className={ styles.button } variant="contained" color="primary" component={ Link } to={ '/' }>
            Homepage</Button> </p> ) }
      </Paper>
    );
  }
  isPermitted () {
    const { post } = this.props;
    const { userData, id } = this.state;

    if ( post.userId === id || userData.role === 'admin' ) {
      return true;
    } else {
      return false;
    }
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  post: PropTypes.object,
  user: PropTypes.object,
};

const mapStateToProps = ( state, props ) => ( {
  post: getPostById( state, props.match.params.id ),
} );

const Container = connect( mapStateToProps )( Component );

export {
  // Component as Post,
  Container as Post,
  Component as PostComponent,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);
