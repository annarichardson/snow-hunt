import React from 'react';
import logo from './logo.svg';
import { AppWrap, PageWrap, Logo } from './App.styles';

function App(): JSX.Element {
  return (
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
  );
}

export default App;
