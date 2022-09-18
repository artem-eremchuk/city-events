import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { 
  Container, 
  AppBar, 
  Toolbar,
  styled,
} from '@mui/material';

const Logo = styled(Link)(({ theme }) => ({
  fontSize: 18,
  borderRight: '1px solid',
  borderRightColor: theme.palette.text.secondary,
  textDecoration: 'none',
  color: theme.palette.text.primary,
  paddingRight: 24
}))

const Header: React.FC = (): JSX.Element => {
  return (
    <AppBar elevation={1} position="sticky">
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