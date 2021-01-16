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

        handleChange = (event) => {
            // this.setState({
            //     feeling: event.target.value
            // }) 
            console.log('input change')
        }



        state = {
            newCreature: {
              title: '',
              medium: '',
              dimension: '',
              url: '',
              statement: ''
            },
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
                //    value={values.title}
                    onChange = {this.handleChange}
                   />
                {/* </Grid> */}

                {/* <Grid item xs={12.0}> */}
                   <TextField
                   variant="outlined"
                   label="Medium"
                   name="medium"
                   className={classes.inputs}


                //    value={values.medium}
                //    onChange = {handleInputChange}

                   />
                {/* </Grid> */}

                {/* <Grid item xs={12.0}> */}
                   <TextField
                   variant="outlined"
                   label="Dimensions"
                   name="dimension"
                   className={classes.inputs}


                //    value={values.dimension}
                //    onChange = {handleInputChange}

                   />
                {/* </Grid>  */}

                {/* <Grid item xs={12.0}> */}
                   <TextField
                   variant="outlined"
                   label="URL"
                   name="url"
                   className={classes.inputs}


                //    value={values.url}
                //    onChange = {handleInputChange}

                   />
                {/* </Grid> */}

                {/* <Grid item xs={12.0}> */}
                   <TextField
                   variant="outlined"
                   label="Statement"
                   name="statement"
                   className={classes.inputs}


                //    value={values.statement}
                //    onChange = {handleInputChange}

                   />
                {/* </Grid> */}

               {/*  <button onClick={() => dispatch({type: 'ADD_ART'})}>ADD ART</button> */}
               </form>

               </Card>
               </Grid>

           </Grid>
    )
}}
export default connect(mapStoreToProps)(withStyles(styles)(ArtForm));