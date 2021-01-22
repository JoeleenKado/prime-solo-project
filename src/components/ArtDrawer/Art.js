import React from 'react';
 import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import {AppBar, Toolbar, Grid, Badge, IconButton, makeStyles, InputBase, TextField, Card, withStyles} from '@material-ui/core'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // I

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

// const InfoPage = () => (
//   <div>
//     <p>Info Page</p>


//   {/* <h3>RS: {JSON.stringify(props.store.art)}</h3> */}

//   </div>
// );

// If you needed to add local state or other things,
// you can make it a class component like:

const styles = {
    inputs: {
        width: '20%',
  
    }
  }

class EditForm extends React.Component {



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
           
        deleteConfirmation = (event, art) => {
        confirmAlert({
          title: 'Please Confirm',
          message: `Would you like to Delete ${art.title}?`,
          buttons: [
            {
              label: 'Yes',
              onClick: () => this.deleteArt(event, art)
            },
            {
              label: 'No',
              onClick: () => alert('Deletion Canceled')
            }
          ]
        })}
      
        deleteArt = (event, art) => {
          console.log(`Deleting ${art.title}...`);
          console.log(art);
                   //Clear message... should say Hello!
          //console.log(`Sending ${this.state.newArt} to DB.`);
               this.props.dispatch({ type: 'DELETE_ART', payload: art.id })
        }
      
      render() {

    const { classes } = this.props;
    // console.log(this.props)
    const art = this.props.store.art;

 return (
      <div>
        <p>Info Page</p>
        <Grid container>
   {art.map((art) => (
            // <li onClick={(event)=>this.monthAlert(event)}>{month.name}</li>
<Card className={classes.cardBackground} key={art.id} onClick={(event)=> this.getDetails(event, {art})}>

{/* <CardMedia  className={classes.marginAuto}  image={art.url} style={{width: '130px', height: '130px'}}/> */}

            {/* <h2>User ID: {info.user_id}</h2> */}
            {/* <p>Description: {info.description}</p> */}
            {/* <img src={info.image_url} alt={info.description}></img> */}
            {/* <button onClick={() => dispatch({type : "DELETE_ITEM", payload : info})}>DELETE</button>  */}
            {/* left off here */}
<h1>{art.title}</h1>
<button onClick={(event)=>this.openEdit(event, art)}>EDIT</button>

{/* <button onClick={(event)=>this.deleteArt(event, art)}>DELETE</button> */}
<button onClick={(event)=>this.deleteConfirmation(event, art)}>delconf</button>

          </Card>
        ))}
        </Grid>
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
               <button onClick={(event)=>this.updateConfirmation(this.state.artToEdit)}>update!</button>
               </Card>
               </Grid>
           </Grid>
   
      </div>
    )
  }
}
export default connect(mapStoreToProps)(withStyles(styles)(EditForm));
//export default EditForm;
//export default connect(mapStoreToProps)(InfoPage);
