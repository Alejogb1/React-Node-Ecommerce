import React from 'react';
import './App.css';
import './assets/main.css';
import './index.css';
import {BrowserRouter, Route, Link} from "react-router-dom"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import SigninScreen from './screens/SigninScreen';
import HeroScreen from './screens/HeroScreen';


function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <BrowserRouter>
    
    <div className="grid-container">
      <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <Link to="/">Cheese Store</Link>
            </div>
            <div className="header-links">
                <Link to="/signin">Login</Link>
            </div>
      </header>
      <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
                <li>
                    <a href="">Hard Cheese</a>
                </li>
                <li>
                    <a href="">Soft Cheese</a>
                </li>
            </ul>
      </aside>
      <main className="main">
        <div className="row hero-container">
        </div>
        <div className="content">
          <Route path="/signin" component={SigninScreen}/>
          <Route path="/product/:id" component={ProductScreen}/>
          <Route path="/" exact={true} component={HomeScreen}/>
          <Route path="/hero" exact={true} component={HeroScreen}/>
        </div>
      </main>
      <footer className="footer">
        All rights reserved
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
