import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';

const Navigate = styled('nav')(() => ({
  paddingLeft: 24,
}))

const NavLink = styled(Link)(({ theme }) => ({
  padding: '16px 24px',
  backgroundColor: 'transparent',
  textDecoration: 'none',
  fontSize: 14,
  fontWeight: 700,
  color: theme.palette.text.secondary,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    borderRadius: 24
  }
}))

const Navbar: React.FC = (): JSX.Element => {
  return (
    <Navigate>
      <NavLink to="/">All</NavLink>
      <NavLink to="/music">Music</NavLink>
      <NavLink to="/sports">Sports</NavLink>
      <NavLink to="/art-and-theater">{`Art & Theater`}</NavLink>
      <NavLink to="/family">Family</NavLink>
      <NavLink to="/experiences">Experiences</NavLink>
      <NavLink to="/festivals">Festivals</NavLink>
    </Navigate>
  )
}

export default Navbar;