import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';


const Layout: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout;