import React from 'react';

import SignIn from './pages/signin';
import SignUp from './pages/signup'

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <SignUp />
    <GlobalStyle />
  </>
);

export default App;
