import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { createPostDate } from '../../../utils/formatDate';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { addPost } from '../../../redux/postsRedux.js';

import styles from './PostAdd.module.scss';

class Component extends React.Component {

  state = {
    postData: {
      id: '',
      title: '',
      text: '',
      created: '',
      updated: '',
      email: '',
      status: '',
      price: '',
      phone: '',
      location: '',
    },
  }

  handleChange = ( { target } ) => {
    const { postData } = this.state;
    const { value, id } = target;
    this.setState( { postData: { ...postData, [ id ]: value } } );
  }


  createAutoParameters = () => {
    const { postData } = this.state;
    const date = createPostDate();
    const id = uuidv4();

    this.setState( {
      postData: {
        ...postData,
        id: id,
        created: date,
        updated: date,
        status: 'published',
      },
    } );
  }

  submitForm = ( e ) => {
    const { postData } = this.state;
    const { addPost } = this.props;
    e.preventDefault();

    let error = null;

    if ( !postData.title.length || !postData.text.length || !postData.email.length ) error = `You can't leave title, text or email fields empty`;
    else if ( postData.title.length < 10 || postData.text.length < 20 ) error = `Title can't be shorter than 10 characters or text than 20 characters`;
    if ( !error ) {
      addPost( postData );
      alert( 'Post saved successfully' );
    } else {
      alert( error );
    }
  }

  render () {
    const { className } = this.props;
    const { submitForm, handleChange, createAutoParameters } = this;
    return (
      <Paper className={ styles.root } >

        <h2>Add new post</h2>

        <form className={ clsx( className, styles.form ) } onSubmit={ submitForm }>
          <TextField className={ styles.title } id='title' label='Title' variant='outlined' InputProps={ { minLength: 10 } } required fullWidth onChange={ handleChange } />
          <TextField className={ styles.text } id='text' label='text' variant='outlined' InputProps={ { minLength: 20 } } required fullWidth onChange={ handleChange } />
          <TextField className={ styles.price } id='price' label='Price' variant='outlined' type='number' InputProps={ { startAdornment: <InputAdornment position='start'>$</InputAdornment> } } inputProps={ { min: 0 } } defaultValue='0' onChange={ handleChange } />
          <TextField className={ styles.phone } id='phone' label='Phone' variant='outlined' onChange={ handleChange } />
          <TextField className={ styles.location } id='location' label='Location' variant='outlined' onChange={ handleChange } />
          <TextField className={ styles.mail } id='email' label='E-mail' variant='outlined' required fullWidth onChange={ handleChange } />
          <Button className={ styles.submit }
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={ createAutoParameters }>
            Submit
          </Button>
        </form>
      </Paper >

    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  addPost: PropTypes.func,
};

const mapDispatchToProps = dispatch => ( {
  addPost: data => dispatch( addPost( data ) ),
} );

const Container = connect( null, mapDispatchToProps )( Component );

export {

  Container as PostAdd,
  Component as PostAddComponent,
};