import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import styled from "styled-components"

export default class Details extends Component {
    constructor() {
        super();
        this.state = {};
        this.toggleOpen = this.toggleOpen.bind(this);
      }
    
      toggleOpen() {
        this.setState({ open: !this.state.open });
      }
    render(){
        return(
            <ProductConsumer >
                {(value)=>{
                  const {id, company, img, info, price, title, inCart} = value.detailProduct;
                    return(
                        <div className = "container py-5">
                            
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <div className = "container" onClick={() => {value.openIMGModal(id);}}>    
                                <img src={img} className="img-fluid" alt="product"  />
                                  </div>  
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2> {title} </h2>
                                
                                <h4 className = "text-Blue">
                                    <strong>
                                        price: <span>$</span> 
                                        {price}
                                     </strong>   
                                </h4>
                                <p className="text-capitalie font-weight-bold mt-3 mb-0">
                                    Description:
                                </p>
                                <p className="text-muted lead">
                                    {info}
                                </p>
                                <div>
                                    <Link to='/'>
                                        <ButtonContainer >
                                            Back
                                        </ButtonContainer>
                                    </Link>
                                    
                                    <ButtonContainer 
                                        style={{marginLeft:"1rem"}}
                                        disabled={inCart?true:false}
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);

                                        }}
                                        >
                                        
                                            {inCart ? "inCart" : "add to cart"}
                                        </ButtonContainer> 
                         
                                    
                                </div>
                                <Heading onClick={this.toggleOpen} style={{fontSize: "1.2rem", marginTop:"1.5rem"}} >Click here for Frequently Asked Questions</Heading>
        <Content open={this.state.open} >
          <h1  style={{fontSize: "1.2rem", fontWeight:"bolder"}}>Where was this product manufactured </h1>
          <p style={{marginBottom:"1rem"}}>All MacarooniShop's products are manufactured in the United States</p>
          <h1  style={{fontSize: "1.2rem", fontWeight:"bolder"}}>How long it take for orders to arrive </h1>
          <p style={{marginBottom:"1rem"}}>Prior to shipping, please allow 3-5 business days for handling of your items from our facility. 
Once shipped, orders in the contiguous US takes 2-3 business days.
International orders usually take 2-3 weeks to arrive depending on the destination and customs processing. The tracking for international orders will not update once the package leaves the US, but the order is still on its way.
*Please note: Orders shipped outside of the U.S. are subject to regular customs duties and fees levied by the destination country and are the responsibility of the buyer.</p>
          <h1  style={{fontSize: "1.2rem", fontWeight:"bolder"}}>Still have other questions? </h1>
          <Link to="/about">
          <p>Click here for contact information</p>
          </Link>
        </Content>
                                </div>
                            </div>    
                         </div>   
                    )
                }}
             </ProductConsumer>    
        );
    }
}

const Heading = styled.h2`
  border: 1px solid #ddd;
  background: white;
  color: black;
  padding: 15px;
  margin-bottom: 0;
  
`;

const Content = styled.div`
  border: 1.5px solid white;
  border-top: none;
  opacity: ${props => (props.open ? "1" : "0")};
  max-height: ${props => (props.open ? "100%" : "0")};
  overflow: hidden;
  padding: ${props => (props.open ? "15px" : "0 15px")};
  transition: all 0.3s;

  p {
    margin: 0;
  }
`;