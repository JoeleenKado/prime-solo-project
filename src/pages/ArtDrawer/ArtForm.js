import React, {useState, useEffect, Component} from 'react'
import {AppBar, Toolbar, Grid, Badge, IconButton, makeStyles, InputBase, TextField, Card, withStyles} from '@material-ui/core'
import { useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';


const useStyles = makeStyles(theme =>({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))

const initialFValues = {
    title: '',
    medium: '',
    dimension: '',
    url: '',
    statement: ''
}



const styles = {
    inputs: {
        width: '20%',

    }
}
// export default function ArtForm() {
    class ArtForm extends Component {

        // handleChange = (event) => {
        //     // this.setState({
        //     //     feeling: event.target.value
        //     // }) 
        //     console.log('input change')
        // }

        


        state = {
            newArt: {
              user_id: '',
              title: '',
              medium: '',
              dimension: '',
              url: '',
              statement: ''
            },
        }

        handleInputChange = (event, inputProperty) => {
console.log('Handling input-change. this.props.store.user.id:', this.props.store.user.id);
console.log('Setting state');

//console.log('Handling input change. this.state.newArt.user_id', this.state.newArt.user_id);
            this.setState({
              newArt : {
                ...this.state.newArt,
                [inputProperty]: event.target.value,
                user_id: this.props.store.user.id
              }
            }, function () {
                console.log('state has been set:', this.state);
            })
          }

          addArt = () => {
            console.log(`Sending ${this.state.newArt.title} to Database...`);
            //Clear message... should say Hello!
            //console.log(`Sending ${this.state.newArt} to DB.`);

            this.props.dispatch({ type: 'ADD_ART', payload: this.state.newArt })

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

    // const [values, setValues] = useState(initialFValues);
    // const classes = useStyles();
    // const dispatch = useDispatch();



    // const handleInputChange= e=> {
    //     const {name, value} = e.target
    //     setValues({
    //         ...values,
    //         [name]: value
    //     })
    // }

    // const addArt= ()=> {
    //     console.log('adding art');
        
    //     }
    
    //   <form  className={classes.root}> 


    const { classes } = this.props;
    return(


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
                   value={this.state.newArt.title}
                    onChange ={ (event) => this.handleInputChange( event, 'title' ) } 
                   />
                {/* </Grid> */}

                {/* <Grid item xs={12.0}> */}
                   <TextField
                   variant="outlined"
                   label="Medium"
                   name="medium"
                   className={classes.inputs}


                   value={this.state.newArt.medium}
                onChange ={ (event) => this.handleInputChange( event, 'medium' ) } 

                   />
                {/* </Grid> */}

                {/* <Grid item xs={12.0}> */}
                   <TextField
                   variant="outlined"
                   label="Dimensions"
                   name="dimension"
                   className={classes.inputs}


                   value={this.state.newArt.dimension}
                onChange ={ (event) => this.handleInputChange( event, 'dimension' ) } 

                   />
                {/* </Grid>  */}

                {/* <Grid item xs={12.0}> */}
                   <TextField
                   variant="outlined"
                   label="URL"
                   name="url"
                   className={classes.inputs}


                   value={this.state.newArt.url}
                onChange ={ (event) => this.handleInputChange( event, 'url' ) } 

                   />
                {/* </Grid> */}

                {/* <Grid item xs={12.0}> */}
                   <TextField
                   variant="outlined"
                   label="Statement"
                   name="statement"
                   className={classes.inputs}


                   value={this.state.newArt.statement}
                onChange ={ (event) => this.handleInputChange( event, 'statement' ) } 

                   />
                {/* </Grid> */}

               {/*  <button onClick={() => dispatch({type: 'ADD_ART'})}>ADD ART</button> */}
               </form>
               <button onClick={this.addArt}>Click Me!</button>
               </Card>
               </Grid>

           </Grid>
    )
}}
export default connect(mapStoreToProps)(withStyles(styles)(ArtForm));