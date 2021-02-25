import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getAllUsers } from '../../../redux/usersRedux';

import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './Header.module.scss';

class Component extends React.Component {

  state = {
    userData: { ...this.props.user },
  }
  handleChangeRole = e => {
    const { userData } = this.state;
    const { value } = e.target;
    this.setState( {
      userData: {
        ...userData,
        role: value,
      },
    } );
  };

  render () {
    const { users } = this.props;
    const { userData } = this.state;
    return (
      <>
        <div>
          <Button className={ styles.link } component={ NavLink } exact to={ `/` } activeClassName='active'><AssignmentIcon /></Button>
        </div>
        <Select labelId="role" id="role" value={ userData.role } onChange={ this.handleChangeRole } label="user">
          { users.map( user => {
            return (
              <MenuItem key={ user.id } value={ user.role }>{ user.name }</MenuItem>
            );
          } ) }
        </Select>
        {userData.role !== 'not logged'
          ?
          <nav className={ styles.component }>
            <Button className={ styles.link } component={ NavLink } exact to={ `/post/add` } activeClassName='active'>Add Post</Button>
            <Button className={ styles.link } component={ NavLink } exact to={ `/` } activeClassName='active'>Log out</Button>
          </nav>
          :
          <nav className={ styles.component }>
            <Button className={ styles.link } href='https://google.com' activeClassName='active'>Log in</Button>
          </nav>
        }
      </>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  users: PropTypes.array,
  user: PropTypes.object,
};
const mapStateToProps = state => ( {
  users: getAllUsers( state ),
} );

const Container = connect( mapStateToProps )( Component );

export {
  Container as Header,
  Component as HeaderComponent,
};
