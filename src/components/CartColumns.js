import React from 'react'

export default function CartColumns(){
    return(
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-5 mx-auto col-lg-2">
                    <p className="textuppercase"> Products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="textuppercase"> Name</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="textuppercase"> Price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="textuppercase"> Quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="textuppercase"> Remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="textuppercase"> Total</p>
                </div>

            </div>  
        </div>
    )
}