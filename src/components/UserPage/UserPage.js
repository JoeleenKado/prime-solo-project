import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { HashRouter as Route, Link } from 'react-router-dom';
import '../App/App.css';
//styling
import {AppBar, CssBaseline, CardContent, Typography, Toolbar, Grid, Badge, IconButton, makeStyles, InputBase, TextField, Card, CardMedia, centerText, withStyles, ThemeProvider, createMuiTheme} from '@material-ui/core'
import { sizing } from '@material-ui/system';

const styles = {
  inputs: {
    pokedexContainer: {
      paddingTop: '20px',
      paddingLeft: '50px',
      paddingRight: '50px'
    },
      width: '50%',
      paddingTop: '20px',
        paddingLeft: '50px',
        paddingRight: '50px'},
        
marginAuto :{ margin: 'auto'
}, cardMedia : {
    margin: '0px',
    marginTop: '0px',    
},
centerText : {
  textAlign : 'center',
  backgroundColor: 'white'
},
cardBackground: {
  backgroundColor: "orange",
  margin: 'auto'
},
}
// const artToEdit= this.state.art
class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_ART' });
  }

handleInputChange = (event, inputProperty) => {
  console.log('Handling input-change...');
  console.log('Setting state...');
  
              this.setState({
                artToEdit : {
                  ...this.state.artToEdit,
                  [inputProperty]: event.target.value,               
                }
              }, function () {
                  console.log('State has been set:', this.state);
              })
            }
    //Clear message... should say Hello!
    //console.log(`Sending ${this.state.newArt} to DB.`);
  
 getDetails = (event, { art }) => {
  console.log('Gettin Details for :', art.title)
  console.log(art.id)
  this.props.dispatch({ type: 'FETCH_DETAILS', payload: art.id });
  this.props.history.push('/Detail')
  // this.props.history.push( {pathname: `/Detail`, state: art})
  }

  render() {
    // const art = useSelector((state) => state.store.art);
    const { classes } = this.props;
    // console.log(this.props)
    const art = this.props.store.art;

return (
      // <ThemeProvider theme={theme}>
      // <CssBaseline />      
      <div>
        {/* RS: {JSON.stringify(this.props.store)} */}
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>

   {/* <h3>Here is your art: {JSON.stringify(art)}</h3>  */}
   <Grid container
            spacing={8}
            className={classes.pokedexContainer}>
            {/* // className={classes.inputs}> */}
              
   {/* {art.map((art) => ( */}
            <Grid item xs={12} sm={12}
            key={art.id}>

<Card className={classes.cardBackground} onClick={(event)=> this.getDetails(event, {art})}>
{/*className={classes.centerText} */}
{/* <Card> */}
{/* <img onClick={(event) => this.getDetails(event, { movie })} src={movie.poster} alt="" /> */}
<CardContent>
<Typography variant="h5" component="h2" className={classes.centerText}>
          Welcome to Virtual Gallery
        </Typography>
        <Typography variant="body2" component="p" className={classes.centerText}>
          To get started. Head over to the Gallery where you can upload art.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
</Card>
{/* <button onClick={(event)=>this.openEdit(event, art)}>EDIT</button> */}
{/* <h1>{art.title}</h1> */}
<h1 className={classes.centerText}>{art.title}</h1>

          </Grid>
         {/* ))}  */}

{/*  */}
{/* {art.map((art) => ( */}
            <Grid item xs={12} sm={4}
            key={art.id}>


{/* <Card onClick={(event)=> this.getDetails(event, {art})}> */}
{/* <CardMedia image={art.url} style={{width: '130px', height: '130px'}}/> */}

{/* </Card> */}

          </Grid>
        {/* ))} */}
{/*  */}
        </Grid>
        
  <LogOutButton className="log-in" />
      </div>
    );//END return
  }//END render
}//END UserPage

// this allows us to use <App /> in index.js
//export default connect(mapStoreToProps)(UserPage);
export default connect(mapStoreToProps)(withStyles(styles)(UserPage));
