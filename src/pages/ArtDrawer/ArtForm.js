import React, {useState, useEffect} from 'react'
import {AppBar, Toolbar, Grid, Badge, IconButton, makeStyles, InputBase, TextField} from '@material-ui/core'


const initialFValues = {
    title: '',
    medium: '',
    dimension: '',
    url: '',
    statement: ''
}

export default function ArtForm() {
    const [values, setValues] = useState(initialFValues);

    return(
       <form>
           <Grid container>
               
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