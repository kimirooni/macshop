import React, { Component } from 'react'
import {ButtonClose} from './Button';
import styled from"styled-components";
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";
import Carousel from "react-elastic-carousel";

export default class Modal extends Component {
  render(){
    return (
      <ProductConsumer>
        {(value) =>{
          const {IMGmodalOpen, closeIMGModal} = value;
          const {img} = value.IMGmodalProduct;

          if(!IMGmodalOpen) {
            return null;
          }
          else {
            return (<ModalContainer>
              <div className = "container">
              <div className = "row">
                <div id="modal" className = "col-8 mx-auto col-md-6 col-lg-4 text center text-capitialized p-5">                 
                <Link to='/details'>
                  <ButtonClose onClick={() => closeIMGModal()}>
                  x
                  </ButtonClose>
                  </Link>
                  <Carousel>
                  <img src={img} className ="img-fluid" alt="product"   />
                  <img src={img} className ="img-fluid" alt="product"   />
                  <img src={img} className ="img-fluid" alt="product"   />
                  </Carousel>
                  
                
                  
                  </div>
                  </div>
                  
                
                </div>
               
              </ModalContainer>
            );
          }
        }}

      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content: center;
#modal{
  background: var(--mainWhite);

}
`;
