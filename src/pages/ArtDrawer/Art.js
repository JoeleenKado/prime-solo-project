import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

const Art = props => {
  
    const {match} = props;
    const {params} = match;
    const {id} = params;

    return( 
      <div>This is the art page for art number 2{id}
              RS: {JSON.stringify(this.props.store)}

      </div>
    
    )
}

export default Art;
