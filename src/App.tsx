import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';

function App() {
  return (
    <>
    <GlobalStyles/>
    {/* <HomePage/> */}
    <LoginPage/>
    </>
  );
}

export default App;
