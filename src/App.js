import './App.css';
import CNavbar from './Components/Navbar/CNavbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {Component} from 'react';
function App() {
  return (
    <div className="App">
      <img src='./bebidas/logobebidas.png'></img>
      <CNavbar/>
    </div>
  );
}

export default App;
