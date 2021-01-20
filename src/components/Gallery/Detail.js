import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import {AppBar, Toolbar, Grid, Badge, IconButton, makeStyles, InputBase, TextField, Card, CardMedia, CardContent, withStyles} from '@material-ui/core'


const useStyles = makeStyles ({
  pokedexContainer: {
      paddingTop: '20px',
      paddingLeft: '50px',
      paddingRight: '50px'

  },
  cardMedia : {
      margin: 'auto'
  },
  cardContent : {
      textAlign : 'center'
  }
})



const Detail = props => {
  const classes = useStyles();

  
    const {match} = props;
    const {params} = match;
    const {id} = params;
    const art = props.store.art
    return( 
      <div>This is the detail page for {props.store.art.title}
                  RS: {JSON.stringify(props.store)}
                  <Card >

{/* <Card> */}
{/* <img onClick={(event) => this.getDetails(event, { movie })} src={movie.poster} alt="" /> */}

<CardMedia className={classes.cardMedia} image={art.url} style={{width: '130px', height: '130px'}}/>
  <CardContent className={classes.cardContent}>
          {/* <li key={art.id} className={'shelf'} > */}
            {/* <h2>User ID: {info.user_id}</h2> */}
            {/* <p>Description: {info.description}</p> */}
            {/* <img src={info.image_url} alt={info.description}></img> */}
            {/* <button onClick={() => dispatch({type : "DELETE_ITEM", payload : info})}>DELETE</button>  */}
            {/* left off here */}
<h1>{props.store.art.statement}</h1>

{/* <button onClick={(event)=>this.deleteArt(event, art)}>DELETE</button> */}
{/* <button onClick={(event)=>this.deleteConfirmation(event, art)}>delconf</button> */}
</CardContent>
</Card>
  

      </div>
    
    )
}

// export default Art;
export default connect(mapStoreToProps)(withStyles()(Detail));
