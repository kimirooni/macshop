import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';
import Carousel from "react-elastic-carousel";
import SlideItem from "./SlideItem";
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom'




export default class ProductList extends Component {
    
    render(){        
        return(
            
            <React.Fragment> 
                
                <Carousel> 
                    <Link to='/specialscreen'>
                    <img src={"New BattleCast Nasus.png"} style={{marginTop: "1rem"}}
                    className="img-fluid"></img>
                    </Link>
                    <Link to='/cart'>
                    <img src={"Macarooni.png"}  style={{marginTop: "1rem"}} className="img-fluid"></img>
                    </Link>
                   
           
        </Carousel>    
            <div className="py-5">
            
            <div className="container"> 
            <strong style={{ fontSize:"2rem"}}>Featured Products</strong>
            <div className="row">
              
                <ProductConsumer >
                    {value=>{
                        return value.products.map(product => {
                            return <Product key={product.id} product = 
                            {product} />;
                        })
                    }}
                </ProductConsumer>
            </div>
            </div>
            </div>
         </React.Fragment> 
              
        )
    }
}