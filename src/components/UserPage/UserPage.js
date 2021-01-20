import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { HashRouter as Route, Link } from 'react-router-dom';

//styling
import {AppBar, Toolbar, Grid, Badge, IconButton, makeStyles, InputBase, TextField, Card, CardMedia, CardContent, withStyles} from '@material-ui/core'



const styles = {
  inputs: {
      width: '50%',
      paddingTop: '20px',
        paddingLeft: '50px',
        paddingRight: '50px'


  }, cardMedia : {
    margin: 'auto',
    marginTop: '10px'
},
cardContent : {
  textAlign : 'center'
}
}
// const artToEdit= this.state.art
class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_ART' });
  }

//   state = {
//     artToEdit: {
//       id: '',
//       user_id: '',
//       title: '',
//       medium: '',
//       dimension: '',
//       url: '',
//       statement: ''
//     },
// }

handleInputChange = (event, inputProperty) => {
  console.log('Handling input-change...');
  console.log('Setting state...');
  
  //console.log('Handling input change. this.state.newArt.user_id', this.state.newArt.user_id);
              this.setState({
                artToEdit : {
                  ...this.state.artToEdit,
                  [inputProperty]: event.target.value,
                  // id : this.props,
                  //user_id : this.props.store.user.id
                }
              }, function () {
                  console.log('State has been set:', this.state);
              })
            }
  // const shelfData = useSelector((state) => state.shelf);

  // openEdit = (event, art) => {
  //   console.log(`In openEdit function...`);
  //   console.log('art:', art);
  //   console.log('Setting state...')
  //   this.setState({
  //     artToEdit : {
  //       ...this.state.artToEdit,
  //       id : art.id,
  //       user_id : this.props.store.user.id,
  //       title : art.title,
  //       medium : art.medium,
  //       dimension : art.dimension,
  //       url : art.url,
  //       statement : art.statement
  //     }
  //   }, function () {
  //       console.log('State has been set:', this.state);
  //   })
  // }

  // updateConfirmation = (artToEdit) => {

  //   if(this.state.artToEdit.title === '') {
  //     alert('A title is required for your Artwork.')
  //   } else {

  //   confirmAlert({
  //     title: 'Please Confirm',
  //     message: `Would you like to save edits made to ${artToEdit.title}?`,
  //     buttons: [
  //       {
  //         label: 'Yes',
  //         onClick: () => this.updateArt()
  //       },
  //       {
  //         label: 'No',
  //         onClick: () => alert('Edit Canceled')
  //       }
  //     ]
  //   })
  //     }
  //   }
  
  
  
  
  
  
  // updateArt = () => {
   
  //       console.log(`Saving edit(s) to Database...`);
  //   //Clear message... should say Hello!
  //   //console.log(`Sending ${this.state.newArt} to DB.`);

  //       this.props.dispatch({ type: 'UPDATE_ART', payload: this.state.artToEdit })
    
  //   // this.setState({
    
  //   //    newArt: {title: '',
  //   //     medium: '',
  //   //     dimension: '',
  //   //     url: '',
  //   //     statement: ''}
  //   // }
  //   // )
  
  // }
  // deleteConfirmation = (event, art) => {
  // confirmAlert({
  //   title: 'Please Confirm',
  //   message: `Would you like to Delete ${art.title}?`,
  //   buttons: [
  //     {
  //       label: 'Yes',
  //       onClick: () => this.deleteArt(event, art)
  //     },
  //     {
  //       label: 'No',
  //       onClick: () => alert('Deletion Canceled')
  //     }
  //   ]
  // })}

  // deleteArt = (event, art) => {
    
    
  
  //   console.log(`Deleting ${art.title}...`);
  //   console.log(art);
    
    //Clear message... should say Hello!
    //console.log(`Sending ${this.state.newArt} to DB.`);

    // this.props.dispatch({ type: 'DELETE_ART', payload: art.id })

    // this.setState({
    
    //    newArt: {title: '',
    //     medium: '',
    //     dimension: '',
    //     url: '',
    //     statement: ''}
    // }
    // )
 // }

 getDetails = (event, { art }) => {
  console.log('Gettin Details for :', art.title)
  console.log(art.id)
  this.props.dispatch({ type: 'FETCH_DETAILS', payload: art.id });
  this.props.history.push('/Detail')
  this.props.history.push( {pathname: `/Detail`, state: art})
  



}


  render() {
    // const art = useSelector((state) => state.store.art);
    const { classes } = this.props;
    // console.log(this.props)
    const art = this.props.store.art;



    return (
      <div>
        RS: {JSON.stringify(this.props.store)}
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>


   <h3>Here is your art: {JSON.stringify(art)}</h3> 
   <Grid container
            spacing={2}
            className={classes.inputs}>
   {art.map((art) => (
            // <li onClick={(event)=>this.monthAlert(event)}>{month.name}</li>
            <Grid item xs={12} sm={12}
            key={art.id}>

{/* <Link to="/Detail">  */}
                                {/* *-------------STEP 8--------------*
                              click on a poster to run getDetails */}
                                {/* <img onClick={(event) => this.getDetails(event, { movie })} src={movie.poster} alt="" /> */}
{/* <Card onClick={()=> this.props.history.push({pathname: `/${art.id}`, state: art})}>  */}
{/* props.history.push({ 
 pathname: '/register',
 state: data_you_need_to_pass
}); */}
<Card onClick={(event)=> this.getDetails(event, {art})}>

{/* <Card> */}
{/* <img onClick={(event) => this.getDetails(event, { movie })} src={movie.poster} alt="" /> */}

<CardMedia className={classes.cardMedia} image={art.url} style={{width: '130px', height: '130px'}}/>
  <CardContent className={classes.cardContent} artProp={art}>
          {/* <li key={art.id} className={'shelf'} > */}
            {/* <h2>User ID: {info.user_id}</h2> */}
            {/* <p>Description: {info.description}</p> */}
            {/* <img src={info.image_url} alt={info.description}></img> */}
            {/* <button onClick={() => dispatch({type : "DELETE_ITEM", payload : info})}>DELETE</button>  */}
            {/* left off here */}
<h1>{art.title}</h1>

{/* <button onClick={(event)=>this.deleteArt(event, art)}>DELETE</button> */}
{/* <button onClick={(event)=>this.deleteConfirmation(event, art)}>delconf</button> */}
</CardContent>
</Card>
 {/* </Link>  */}
{/* <button onClick={(event)=>this.openEdit(event, art)}>EDIT</button> */}

          </Grid>
        ))}
        </Grid>
        
  <LogOutButton className="log-in" />
      </div>
    );//END return
  }//END render
}//END UserPage

// this allows us to use <App /> in index.js
//export default connect(mapStoreToProps)(UserPage);
export default connect(mapStoreToProps)(withStyles(styles)(UserPage));
