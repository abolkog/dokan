import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Order from './pages/Order';
import { CartProvider } from './contexts/CartContext';

const useStyles = makeStyles({
  root: {
    padding: 20,
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <CartProvider>
      <Router>
        <CssBaseLine />
        <NavBar />
        <Container className={classes.root}>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
            <Route path='/checkout'>
              <Checkout />
            </Route>
            <Route path='/orders/:code'>
              <Order />
            </Route>
          </Switch>
        </Container>
      </Router>
    </CartProvider>
  );
};

export default App;
