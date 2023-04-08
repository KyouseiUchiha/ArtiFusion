import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Link from 'next/link';
import NavLink from './NavLink/';

import actions from '../../../redux/actions/';
import { height } from '@mui/system';

import UserProfile from '../../Profile/UserProfile';
import ProfileIcon from '../../Profile/ProfileIcon';

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => !!state.authentication.token);
  const handleSearch = value => {
    setSearchText(value);
    setShowClearButton(value !== '');
    onSearch(value);
  };

  return (
    <>
      <div className="tabs is-centered">
        <nav className="navbar">
          <div className="navbar-brand">
            <Link href="/">
              <a className="navbar-item is-flex">
                <img
                  src="/img/logo_light.png"
                  alt="Logo"
                  style={{ width: '150px', maxHeight: '250px' }}
                />
              </a>
            </Link>
          </div>
        </nav>
        <ul>
          <Link href="/">
            <a>Home</a>
          </Link>
          <NavLink href="/register" privateRoute={false}>
            Register
          </NavLink>
          <NavLink href="/login" privateRoute={false}>
            Login
          </NavLink>
          <Link href="/user">
            <a>Profile</a>
          </Link>
          <Link href="/upload">
            <a>Upload</a>
          </Link>
         
          {isAuthenticated && (
            <li onClick={() => dispatch(actions.deauthenticate())}>
              <a>Log Out</a>
            </li>
          )}
          {isAuthenticated && (
            <div
              style={{
                position: 'fixed',
                top: '10px',
                left: '10px',
                zIndex: 1000,
              }}
            ></div>
          )}
          <ProfileIcon />
        </ul>
      </div>
    </>
  );
};

export default Navbar;
