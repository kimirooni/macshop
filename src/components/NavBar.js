import React, { Component } from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import {ButtonNav, ButtonContainer} from './Button';

export default class NavBar extends Component {
    render(){
        return(
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">         
             <Link to="/">
          <img src="mac.png" alt="store" className="navbar-brand" />
        </Link>         
                  <ul className = "navbar-nav align-items-center" >       
                  <li className="nav-item ml-5">        
                    <Link to="/" className = "nav-link">
                        <ButtonNav >
                        products
                        </ButtonNav>
                       </Link>  
                       </li>                  
                   </ul>  
                   
                  
                   <Link to="/cart" className="ml-auto">                  
                   <ButtonNav >                      
                    <span className="mr-2">
                    <i className="fas fa-shopping-cart " />
                    </span>
                    Cart
            </ButtonNav >
             
            </Link>  
               
                                
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background:var(--mainMaroon);
    .nav-link{
        color:var(--mainWhite)!important;
        font-size:1.3rem;
        text-transform:capitalize; 
    }
`;


