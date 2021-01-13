import React from 'react';
import {AppBar, Toolbar, Grid, Badge, IconButton} from '@material-ui/core'
//styling
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';



export default function NavBar() {
    return(
        
       <AppBar position="static">   
       <Toolbar>
           <Grid container>
            <Grid item sm={6} style={{border:'1px solid #fff'}}>
                {/*  input base is the search bar i think*/}               
<inputBase/>

            </Grid>

            <Grid item sm={6} style={{border: '1px solid magenta'}}>
       <IconButton>
           <Badge badgeContent={4} color="secondary">
               <NotificationsNoneIcon/>
           </Badge>
       </IconButton>
</Grid>


           </Grid>
           
           </Toolbar>     
           </AppBar>
    )
}