import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    marginLeft: 10,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar>
        <LocalMallIcon />
        <Typography variant='h6' className={classes.title}>
          Al-Dokan
        </Typography>
        <Badge color='secondary' badgeContent={1}>
          <ShoppingCartIcon />
        </Badge>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
