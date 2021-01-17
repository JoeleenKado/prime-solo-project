import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

//styling
import {AppBar, Toolbar, Grid, Badge, IconButton, makeStyles, InputBase, TextField, Card, withStyles} from '@material-ui/core'



const styles = {
  inputs: {
      width: '20%',

  }
}

class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_ART' });
  }

  state = {
    artToEdit: {
      id: '',
      user_id: '',
      title: '',
      medium: '',
      dimension: '',
      url: '',
      statement: ''
    },
}

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

  openEdit = (event, artwork) => {
    console.log(`In openEdit function...`);
    console.log('artwork:', artwork);
    console.log('Setting state...')
    this.setState({
      artToEdit : {
        ...this.state.artToEdit,
        id : artwork.id,
        user_id : this.props.store.user.id,
        title : artwork.title,
        medium : artwork.medium,
        dimension : artwork.dimension,
        url : artwork.url,
        statement : artwork.statement
      }
    }, function () {
        console.log('State has been set:', this.state);
    })
  }

  updateArt = () => {
    console.log(`Saving edit(s) to Database...`);
    //Clear message... should say Hello!
    //console.log(`Sending ${this.state.newArt} to DB.`);

    this.props.dispatch({ type: 'UPDATE_ART', payload: this.state.artToEdit })

    // this.setState({
    
    //    newArt: {title: '',
    //     medium: '',
    //     dimension: '',
    //     url: '',
    //     statement: ''}
    // }
    // )
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
   <ul>
   {art.map((artwork) => (
            // <li onClick={(event)=>this.monthAlert(event)}>{month.name}</li>

          <li key={artwork.id} className={'shelf'} onClick={(event)=>this.openEdit(event, artwork)}>
            {/* <h2>User ID: {info.user_id}</h2> */}
            {/* <p>Description: {info.description}</p> */}
            {/* <img src={info.image_url} alt={info.description}></img> */}
            {/* <button onClick={() => dispatch({type : "DELETE_ITEM", payload : info})}>DELETE</button>  */}
            {/* left off here */}
<h1>{artwork.title}</h1>
          </li>
        ))}
        </ul>
        <Grid container>
                               <Grid item xs={12.0}>

               <Card>
               <form>

               {/* <Grid item xs={12.0}> */}
                   <TextField
                   variant="outlined"
                   label="Title"
                   name="title"
                   className={classes.inputs}
                   value={this.state.artToEdit.title}
                    onChange ={ (event) => this.handleInputChange( event, 'title' ) } 
                   />
                {/* </Grid> */}

                {/* <Grid item xs={12.0}> */}
                   <TextField
                   variant="outlined"
                   label="Medium"
                   name="medium"
                   className={classes.inputs}

                   value={this.state.artToEdit.medium}
                onChange ={ (event) => this.handleInputChange( event, 'medium' ) } 

                   />
                {/* </Grid> */}

                {/* <Grid item xs={12.0}> */}
                   <TextField
                   variant="outlined"
                   label="Dimensions"
                   name="dimension"
                   className={classes.inputs}

                   value={this.state.artToEdit.dimension}
                onChange ={ (event) => this.handleInputChange( event, 'dimension' ) } 

                   />

                   <TextField
                   variant="outlined"
                   label="URL"
                   name="url"
                   className={classes.inputs}

                   value={this.state.artToEdit.url}
                onChange ={ (event) => this.handleInputChange( event, 'url' ) } 

                   />
                {/* </Grid> */}

                {/* <Grid item xs={12.0}> */}
                   <TextField
                   variant="outlined"
                   label="Statement"
                   name="statement"
                   className={classes.inputs}

                   value={this.state.artToEdit.statement}
                onChange ={ (event) => this.handleInputChange( event, 'statement' ) } 

                   />

                 {/* <button onClick={() => dispatch({type: 'ADD_ART'})}>ADD ART</button>  */}
               </form>
               <button onClick={this.updateArt}>update!</button>
               </Card>
               </Grid>

           </Grid>
   

  <LogOutButton className="log-in" />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
//export default connect(mapStoreToProps)(UserPage);
export default connect(mapStoreToProps)(withStyles(styles)(UserPage));
