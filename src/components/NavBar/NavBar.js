import React from 'react';
import {AppBar, Toolbar, Grid} from '@material-ui/core'

export default function NavBar() {
    return(
        
       <AppBar position="static">   
       <Toolbar>
           <Grid container>
            <Grid item sm={6} style={{border:'1px solid #fff'}}>

            </Grid>

            <Grid item sm={6} style={{border: '1px solid magenta'}}>

</Grid>


           </Grid>
           
           </Toolbar>     
           </AppBar>
    )
}