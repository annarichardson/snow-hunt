import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import logo from './logo.svg';
import { AppWrap, PageWrap, Logo } from './App.styles';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppWrap>
        <header>
          <Logo src={logo} alt="logo" />
          <p>
            Edit
            {' '}
            <code>src/App.tsx</code>
            {' '}
            and save to reload.
          </p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <PageWrap />
      </AppWrap>
    </Provider>
  );
}

export default App;
