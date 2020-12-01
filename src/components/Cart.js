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
import CartTotals from "./CartTotals"

//import {Modal} from './Modal'

export default class Cart extends Component {
    render() {
        return(
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length>0){
                            return(
                                <React.Fragment>
                                    <Title  name ="Your cart" />
                                    <CartColumns/>
                                    <CartList value={value} />
                                    <CartTotals value={value} history={this.props.history}/>
                                 </React.Fragment>
                            );
                        } else {
                           return <EmptyCart/>;
                        }
                    }}
                 </ProductConsumer>   
                </section>




        );
    }





}