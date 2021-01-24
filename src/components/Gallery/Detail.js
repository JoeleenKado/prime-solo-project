import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import { AppBar, Toolbar, Grid, createMuiTheme, Badge, Paper, IconButton, makeStyles, InputBase, TextField, Card, CardMedia, CardContent, withStyles } from '@material-ui/core'

const useStyles = makeStyles({
  pokedexContainer: {
    paddingTop: '20px',
    paddingLeft: '50px',
    paddingRight: '50px'

  },
  cardMedia: {
    margin: 'auto'
  },
  cardContent: {
    textAlign: 'center'
  }
})

const theme = createMuiTheme({
  shape: {
    borderRadius: '40px'
  },
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#6f458a',
    },
    background: {
      default: '#42f59b'
    }
    ,

  },
});

const styles = {
  inputs: {
    width: '100%',
    height: '50px',
    paddingTop: '20px',
    paddingLeft: '50px',
    paddingRight: '50px'


  }, cardMedia: {
    margin: 'auto',
    marginTop: '10px'
  },
  cardContent: {
    textAlign: 'center'
  }
}

class Detail extends React.Component {

  render() {
    const { classes } = this.props;
    // console.log(this.props)
    const art = this.props.store.art;
    return (


      <div>
        {/* {JSON.stringify(this.props.store)} */}
        {/* This is the detail page for {this.props.store.art.title}
                 RS: {JSON.stringify(this.props.store)}
                   */}
        {/* <Card> */}
        {/* <img onClick={(event) => this.getDetails(event, { movie })} src={movie.poster} alt="" /> */}

        <Grid container
          spacing={2}
          className={classes.inputs}>

          {art.map((art) => (
            <Grid item xs={12} sm={4}
              sm={12}
              key={art.id}>
              {/* <Card >

                <CardMedia className={classes.cardMedia} image={art.url} style={{ width: '2000px', height: '200px' }} />
                <CardContent className={classes.cardContent}>
                 
                </CardContent>
              </Card> */}
<img src={art.url}></img>
            </Grid>

          ))}
          {art.map((art) => (
            <Grid item xs={12} sm={4}
              sm={12}
              key={art.id}>
              <Paper>

                {/* <CardMedia className={classes.cardMedia} image={art.url} style={{width: '130px', height: '130px'}}/> */}
                <CardContent className={classes.cardContent}>
                  {/* <li key={art.id} className={'shelf'} > */}
                  <h2>{art.title} </h2>
                  <h2>{art.medium} </h2>
                  <h2>{art.dimension} </h2>
                  <h2>{art.statement} </h2>
                </CardContent>
              </Paper>

            </Grid>

          ))}
        </Grid>

      </div>

    )//END return
  }//END render
}//END Detail
// export default Art;
export default connect(mapStoreToProps)(withStyles(styles)(Detail));
