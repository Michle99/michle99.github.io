import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Your Name</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
