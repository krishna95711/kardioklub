import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/logo.jpg';

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{ gap: { sm: '123px', xs: '40px' }, justifyContent: 'none' }}
    px="20px"
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{
          width: '48px',
          height: '48px',
          margin: '5px',
          padding: '0px',
          borderRadius: 400 / 2,
        }}
      />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link
        to="/"
        style={{ textDecoration: 'none', color: '#00FFFF', borderBottom: '' }}
      >
        Home
      </Link>
      {/* <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a> */}
    </Stack>
  </Stack>
);

export default Navbar;
