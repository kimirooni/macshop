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



export default class OutOfStock extends Component {
    render() {
        return(
            <div style={{backgroundColor:"white"}}>
            <div style={{marginTop: "1.2rem",}}>
            <div className='row'  >
                <div  className=" mx-auto ">
                    <img className="img-fluid"src={"SORRY.png"}/>
                </div>
              
                </div>   
            </div>
        </div>




        );
    }





}