import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import Modal from './components/Modal';
import CartModal from './components/CartModal';
import Cart from "./components/Cart"
import BottomBar from './components/BottomBar';
import About from "./components/About";
//import Product from './components/Product';
import SpecialScreen from "./components/SpecialScreen";
import OutOfStock from "./components/OutOfStock"
class App extends Component {
    render() {
        return (
            <React.Fragment>
              <NavBar />
              
              <Switch>  
              <Route exact path= "/" component={ProductList}/>              
                <Route path= "/details" component={Details}/> 
                <Route path="/cart" component={Cart} />   
                <Route path="/about" component={About}/>  
                <Route path="/specialscreen" component={SpecialScreen}/>        
                <Route path="/outofstock" component={OutOfStock}/>
                <Route component={Default}/> 
                </Switch>  
                <BottomBar/> 
                <Modal />   
                <CartModal/>
                
            </React.Fragment>
        );
    }
}
 
export default App;