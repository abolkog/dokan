import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    marginLeft: 10,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const { cart } = useContext(CartContext);

  return (
    <AppBar position='static'>
      <Toolbar>
        <LocalMallIcon />
        <Typography variant='h6' className={classes.title}>
          <Link to='/' className={classes.link}>
            Al-Dokan
          </Link>
        </Typography>
        <Link to='/cart' className={classes.link}>
          <Badge color='secondary' badgeContent={cart.itemsCount}>
            <ShoppingCartIcon />
          </Badge>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
