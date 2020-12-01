import React, { Component } from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import {ButtonNav, ButtonContainer} from './Button';
import Title from './Title';

export default class BottomBar extends Component {
    render(){
        return(
            <FooterWrapper sticky="bottom">
            <div style={{ alignItems:"left" }}>© 2020 Copyright: Kim Nguyen</div>
            <div >
            
                <Link to="/about">
                    <Title name= "About"/>
                    
                    </Link> <Link to="/about"><Title name= "Kimirooni "/></Link>
                   
            </div>
            
        </FooterWrapper>
        );
    }
}

const FooterWrapper = styled.nav`
background-color: #f3f3f;

border-top: 1px solid #114b74;
`;


