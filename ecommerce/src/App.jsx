import React, { useState } from 'react';
import NavBar from './Navbar';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import RegisterPage from './RegisterPage';
import UserLogin from './UserLogin';
import Profile from './Profile';
// import ShoppingCart from './ShoppingCart';
import { Route, Switch } from 'wouter';
import { useFlashMessage } from './FlashMessageStore';
import './styles.css';

function App() {

  const { getMessage, clearMessage } = useFlashMessage();
  const flashMessage = getMessage();
  const [isNavBarShowing, setNavBarShowing] = useState(false);
  const toggleNavBar = () => {
    setNavBarShowing(!isNavBarShowing);
  }

  // useEffect(() => {

  //   const timer = setTimeout(() => {
  //     clearMessage();
  //   }
  //     , 3000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }
  //   , [flashMessage]);

  return (
    <>
      <NavBar />

      {flashMessage.message && (
        <div className={`alert alert-${flashMessage.type} text-center flash-alert`} role="alert">
          {flashMessage.message}
        </div>
      )}
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={UserLogin} />
        <Route path="/Profile" component={Profile} />
        {/* <Route path="/cart" component={ShoppingCart} /> */}


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