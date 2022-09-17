import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { 
  Container, 
  AppBar, 
  Toolbar, 
} from '@mui/material';

const Logo = styled(Link)(({ theme }) => `
    font-size: 18px;
    border-right: 1px solid ${theme.palette.text.secondary};
    padding-right: 24px;
    text-decoration: none;
    color: ${theme.palette.text.primary};
  `,
);

function Header() {
  return (
    <AppBar elevation={1} >
      <Container maxWidth="xl" disableGutters>
        <Toolbar sx={{ px: 48, py: 20 }} disableGutters>
          <Logo to="/">
            almet events.
          </Logo>
          <Navbar />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;