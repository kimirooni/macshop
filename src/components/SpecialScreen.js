
import React, { Component} from 'react';
import Title from './Title';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context'
import PropTypes from 'prop-types';
import {ButtonContainer, ButtonNav, Button1} from './Button';
import CartColumns from './CartColumns';
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import StyledCard from "./AnimatedCard";
import OOSModal from "./OutOfStock"



export default class SpecialScreen extends Component {
    constructor() {
        super();
        this.state = {};
        this.toggleOpen = this.toggleOpen.bind(this);
      }
    
      toggleOpen() {
        this.setState({ open: !this.state.open });
      }
    
    render() {
        return(
        
            <div style={{marginTop: "1.2rem"}}
            id="container">
                   <NavWrapper className=" px-sm-4">   
                   <Link to="/outofstock">  
                   <ButtonContainer >    
             BUY
             </ButtonContainer>
            </Link>

        </NavWrapper>
            <div className='row' style={{marginLeft: "10rem"}} >
           <StyledCard delay={500}>
                <img src={"BigNasus.png"} className="img-fluid" style={{borderRadius:"6rem"}}></img>
            </StyledCard>
                   
            </div>
            <div className = " mx-auto col-md-5  " style={{marginTop:"2rem"}}>
                <strong style = {{fontSize: "3rem", fontWeight:"bolder"}}> Battlecast Nasus</strong>
            <p style = {{fontSize: "1.2rem", marginTop:"1rem", fontWeight:"unset"}}>The Battlecast Nasus skin transforms the Egyptian-style
                 dog god-warrior into a bulked-up robot, spewing flames from an internal 
                 engine and wielding a massive, fire-spitting axe. It also brings new animations for each of the League of 
                 Legends champion's abilities, filtering them through a fiery orange and steel-grey aesthetic.</p>
                
                 </div>
                
                 <div style={{backgroundColor:"peachpuff"}}>
                 <video src={"./nasusvideo.mp4"} width="1200" height="600" controls="controls" style={{alignItems:"center", margin:"5rem", marginLeft:"22rem" }} className="img-fluid"/>
                 </div>
                 <div style={{ height:"45rem"}}>
                 <div className= "col-9 mx-auto col-md-6 col-lg-4 my-3">
                     
  <div className="card ">
    <h3 className="align-self-center" style={{fontWeight:"lighter"}}>50.99$ LIMITED STOCK</h3>
  </div>
  <div className = "card-footer d-flex justify-content-between " >
  <Link to="/outofstock">  
<Button1 style={{marginLeft:"12rem"}}>  Add to cart</Button1>
</Link>
  </div>
  <div style={{marginTop:"3rem", height:"900"}} >
        <Heading onClick={this.toggleOpen} style={{fontSize: "1.2rem"}} >Click here for Frequently Asked Questions</Heading>
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
 
        </div>


       

        );
    }





}
const NavWrapper = styled.nav`
    background:var(--mainWhite);
    .nav-link{
        color:var(--mainWhite)!important;
        font-size:1rem;
        text-transform:capitalize; 
    }
`;
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





 