import React from 'react';
import Navbar from '../Navbar/Navbar';
import { 
  Container, 
  AppBar, 
  Toolbar, 
  Typography 
} from '@mui/material';

const logoStyle = {
  fontSize: "18px",
  borderRight: 1,
  borderColor: 'text.secondary',
  pr: 24 
}

function Header() {
  return (
    <AppBar elevation={1} >
      <Container maxWidth="xl" disableGutters>
        <Toolbar sx={{ px: 48, py: 20 }} disableGutters>
          <Typography sx={logoStyle}>
            almet events.
          </Typography>
          <Navbar />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;