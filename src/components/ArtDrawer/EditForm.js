import React from 'react';
 import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import {AppBar, Toolbar, Grid, Button, Badge, List, ExapandLess, ListSubheader, ListItem, ListItemText,ListItemIcon, createMuiTheme, Collapse, CardHeader, CardActions, Typography, CardMedia, CardActionArea, CardContent, IconButton, makeStyles, InputBase, TextField, Card, withStyles} from '@material-ui/core'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // I
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExpandLess, ExpandMore } from '@material-ui/icons'
// import ExpandMore from "@bit/mui-org.material-ui-icons.expand-more";
// import InboxIcon from "@bit/mui-org.material-ui-icons.move-to-inbox";
// import ExpandLess from "@bit/mui-org.material-ui-icons.expand-less";

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
const theme = createMuiTheme({
  shape: {
      borderRadius: '40px'
    },
  palette: {
      primary: {
          // Purple and green play nicely together.
          main: '#365c58',
        },
        background: {
            default : '#42f59b'
        }
        ,
    
  },
});

const styles = {
    inputs: {
        width: '20%',
  
    },
    root: {
      width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background,
    margin: 'auto'
    },
    centerText: {
      textAlign: 'center'
    },
    marginAuto :
    {margin: 'auto'},
  
    nested: {
      paddingLeft: theme.spacing.unit * 4
    },
    media: {
      height: 0,
      padding: '56.25%'
    },
    
  }

class EditForm extends React.Component {



    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_ART' });
      }
    
      state = {
        open: true,
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

    handleClick = () => {
      this.setState(state => ({ open: !state.open }));
    };

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
      
        openEdit = (event, art) => {
          console.log(`In openEdit function...`);
          console.log('art:', art);
          console.log('Setting state...')
          this.setState({
            artToEdit : {
              ...this.state.artToEdit,
              id : art.id,
              user_id : this.props.store.user.id,
              title : art.title,
              medium : art.medium,
              dimension : art.dimension,
              url : art.url,
              statement : art.statement
            }
          }, function () {
              console.log('State has been set:', this.state);
          })
        }
      
        updateConfirmation = (artToEdit) => {
      
          if(this.state.artToEdit.title === '') {
            alert('A title is required for your Artwork.')
          } else {
      
          confirmAlert({
            title: 'Please Confirm',
            message: `Would you like to save edits made to ${artToEdit.title}?`,
            buttons: [
              {
                label: 'Yes',
                onClick: () => this.updateArt()
              },
              {
                label: 'No',
                onClick: () => alert('Edit Canceled')
              }
            ]
          })
            }
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

    const { classes } = this.props;
    // console.log(this.props)
    const art = this.props.store.art;


    return (
      <div>
        <p>Info Page</p>
        <Grid container spacing={8}>
   {art.map((art) => (
            // <li onClick={(event)=>this.monthAlert(event)}>{month.name}</li>
<Grid item xs={12} sm={4}
            key={art.id}>


<Card className={classes.root} key={art.id}>
<CardHeader className={classes.centerText}
       
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={art.title} 
        // subtitle={art.dimension}

        subheader={art.medium} 
      
            
      />

<Typography variant="body2" color="textSecondary" component="p">
            {art.dimension}
            
          </Typography>
<CardActionArea>
<CardMedia className={classes.marginAuto}  image={art.url} style={{width: '130px', height: '130px'}} title={art.title}/>
{/* <CardMedia  className={classes.marginAuto}  image={art.url}/> */}
<CardContent>
 <Typography gutterBottom variant="body2" component="h2"> 
            {art.statement}
          </Typography> 
         
          </CardContent>
          </CardActionArea>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            {art.statement}
            
          </Typography> */}
          <CardActions>
            

          {/* <List component="nav" subheader={<ListSubheader component="div"></ListSubheader>} className={classes.root}>
        
        <ListItem button onClick={this.handleClick}>
        
          <ListItemText inset primary="More" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
             
              Medium
              <ListItemText inset primary={art.medium} />
            </ListItem>
            <ListItem button className={classes.nested}>
              
              Dimensions
              <ListItemText inset primary={art.dimension} />
            </ListItem>
        
          </List>
          </Collapse>
          </List>;
 */}

          

         
<Button onClick={(event)=>this.openEdit(event, art)}>EDIT</Button>

{/* <button onClick={(event)=>this.deleteArt(event, art)}>DELETE</button> */}
<Button onClick={(event)=>this.deleteConfirmation(event, art)}>DELETE</Button>
</CardActions>
<Collapse timeout="auto" unmountOnExit>
  
</Collapse>
          </Card>
          </Grid>
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
