import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import NavBar from './components/NavBar';
import Home from './pages/Home';

const useStyles = makeStyles({
  root: {
    padding: 20,
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <CssBaseLine />
      <NavBar />
      <Container className={classes.root}>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
