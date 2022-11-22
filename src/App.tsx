import React from "react";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import Navbar from "./components/Navbar/Navbar";
import RegisterPage from "./components/RegisterPage/RegisterPage";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      {/* <HomePage></HomePage> */}
      <LoginPage></LoginPage>
      <RegisterPage></RegisterPage>
      <CurrencyConverter />
    </div>
  );
}

export default App;
