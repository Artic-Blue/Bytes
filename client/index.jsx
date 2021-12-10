import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { UserProvider } from './context/UserContext';

render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById('root'),
);
