import React, { Component } from 'react';
import Title from './Title';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context'
import PropTypes from 'prop-types';
import {ButtonContainer} from './Button';
import CartColumns from './CartColumns';
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";



export default class About extends Component {
    render() {
        return(
            <div style={{marginTop: "1.2rem"}}>
            <div className='row'  style={{marginLeft: "6rem"}}>
                <div  className="col-10 mx-auto text-center text-title">
                    <h1 style={{marginBottom:"5rem"}}> About </h1>
                </div>
                <div  >
                <h1 style={{fontSize:"1.5rem"}}>This is a demo ecommerce website created by Kim Nguyen (Kimirooni). The code for this website is publicized and can be view through CODESANDBOX.</h1>
                <h1 style={{fontSize:"1.5rem"}}>Portfolio website: www._____.com</h1>
                <h1 style={{fontSize:"1.5rem"}}>What was this website made with? React JS</h1>
                <h1 style={{marginTop:"5rem"}}>Email: kimhnguyn@gmail.com</h1> 
                <h1>Phone: 678-862-6577</h1> 
               
                </div>
                   
            </div>
        </div>




        );
    }





}