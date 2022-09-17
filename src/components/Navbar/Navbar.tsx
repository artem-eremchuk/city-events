import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const Navigate = styled('nav')(({ theme }) => `
    padding: 0 24px;
  `,
);

const NavLink = styled(Link)(({ theme }) => `
    padding: 16px 27px;
    background-color: transparent;
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    color: ${theme.palette.text.secondary};
    &:hover {
      background-color: ${theme.palette.secondary.main};
      color: ${theme.palette.primary.main};
      border-radius: 24px;
    }
  `,
);

function Navbar() {
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