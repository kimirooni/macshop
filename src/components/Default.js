import React, { Component } from 'react'


export default class Default extends Component {
    render(){
        return(
            <div>
                <h3>PAGE NOT FOUND</h3>
                <span className ="text-danger">
                    {this.props.location.pathname}
                </span> {" "}
                was not found   
            </div>   
        )
    }
}