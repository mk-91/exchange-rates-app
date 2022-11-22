import React from 'react';
// import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import Navbar from './components/Navbar/Navbar';
import RegisterPage from './components/RegisterPage/RegisterPage';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      {/* <HomePage></HomePage> */}
      <LoginPage></LoginPage>
      <RegisterPage></RegisterPage>
    </div>
  );
}

export default App;
