import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { store } from '../../store';
import Home from '../Home/Home';
import NavBar from '../../components/NavBar/NavBar';
import { AppWrap, PageWrap } from './App.styles';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router>
        <AppWrap>
          <NavBar />
          <PageWrap>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </PageWrap>
        </AppWrap>
      </Router>
    </Provider>
  );
}

export default App;
