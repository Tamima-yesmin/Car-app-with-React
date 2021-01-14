
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
//-----------------------------------------------------------------------------
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home'
import Navbar from './components/Navbar_Folder/Navbar'
import About from './components/Navbar_Folder/About'
import Contact from './components/Navbar_Folder/Contact'
import SignIn from './components/Navbar_Folder/SignIn'
import Cart from './components/Navbar_Folder/Cart'
// import Data from './Data.json'
// import Card from './components/Card'
// import Card from './components/Card'



function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/"  >
          <Navbar />
          <Home />
          {/* {Data.map((item, index) => <Card Key={index} titleText={item.title} descText={item.des} img={item.img} />)} */}
        </Route >
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signin" component={SignIn} />
        {/* <Route exact path="/cart" component={Cart} /> */}
        <Route exact path="/cart"  >
          <Navbar />
          <Cart />
        </Route >

        <Redirect to="/" />

      </Switch>






    </>
  );
}

export default App;
