import React, {useState, useEffect} from 'react'
import {AppBar, Toolbar, Grid, Badge, IconButton, makeStyles, InputBase, TextField} from '@material-ui/core'

const useStyle = makeStyles(theme =>({
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
    const classes = useStyle();

    return(
       <form container className={classes.root}>
           <Grid>
               
               <Grid item xs={2.0}>
                   <TextField
                   variant="outlined"
                   label="Title"
                   value={values.title}
                   />
                </Grid>

                <Grid item xs={2.0}>
                   <TextField
                   variant="outlined"
                   label="Medium"
                   value={values.medium}
                   />
                </Grid>

                <Grid item xs={2.0}>
                   <TextField
                   variant="outlined"
                   label="Dimensions"
                   value={values.dimension}
                   />
                </Grid> 

                <Grid item xs={2.0}>
                   <TextField
                   variant="outlined"
                   label="URL"
                   value={values.url}
                   />
                </Grid>

                <Grid item xs={2.0}>
                   <TextField
                   variant="outlined"
                   label="Medium"
                   value={values.medium}
                   />
                </Grid>

           
           
           </Grid>
       </form>
    )
}