import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { store } from '../../store';
import NotFound from '../NotFound/NotFound';
import Quiz from '../Quiz/Quiz';
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
                <Quiz />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </PageWrap>
        </AppWrap>
      </Router>
    </Provider>
  );
}

export default App;
