import React, {useState, useEffect} from 'react'
import {AppBar, Toolbar, Grid, Badge, IconButton, makeStyles, InputBase, TextField} from '@material-ui/core'
import { useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

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

export default function ArtForm() {
    const [values, setValues] = useState(initialFValues);
    const classes = useStyles();
    const dispatch = useDispatch();


    const handleInputChange= e=> {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const addArt= ()=> {
        console.log('adding art');
        
        }
    



    return(
       <form  className={classes.root}>

           <Grid container>

               <Grid item xs={2.0}>
                   <TextField
                   variant="outlined"
                   label="Title"
                   name="title"
                   value={values.title}
                   onChange = {handleInputChange}
                   />
                </Grid>

                <Grid item xs={2.0}>
                   <TextField
                   variant="outlined"
                   label="Medium"
                   name="medium"

                   value={values.medium}
                   onChange = {handleInputChange}

                   />
                </Grid>

                <Grid item xs={2.0}>
                   <TextField
                   variant="outlined"
                   label="Dimensions"
                   name="dimension"

                   value={values.dimension}
                   onChange = {handleInputChange}

                   />
                </Grid> 

                <Grid item xs={2.0}>
                   <TextField
                   variant="outlined"
                   label="URL"
                   name="url"

                   value={values.url}
                   onChange = {handleInputChange}

                   />
                </Grid>

                <Grid item xs={2.0}>
                   <TextField
                   variant="outlined"
                   label="Statement"
                   name="statement"

                   value={values.statement}
                   onChange = {handleInputChange}

                   />
                </Grid>

                <button onClick={() => dispatch({type: 'ADD_ART'})}>ADD ART</button>

           
           </Grid>
       </form>
    )
}