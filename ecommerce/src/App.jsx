import React, { useState } from 'react';
import NavBar from './Navbar';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import RegisterPage from './RegisterPage';
import { Route, Switch } from 'wouter';
import './styles.css';

function App() {

  const [isNavBarShowing, setNavBarShowing] = useState(false);
  const toggleNavBar = () => {
    setNavBarShowing(!isNavBarShowing);

  }
  return (
    <>
      <NavBar />
   
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>

      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2023 E-Shop. All rights reserved.</p>
        </div>
      </footer>


    </>

  )
}
export default App;