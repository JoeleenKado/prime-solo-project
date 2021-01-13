import React from 'react';
import {AppBar, Toolbar, Grid, Badge, IconButton} from '@material-ui/core'
//styling
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

export default function NavBar() {
    return(
        
       <AppBar position="static">   
       <Toolbar>
           <Grid container>
           
           {/* start grid item */}
            <Grid item sm={6} style={{border:'1px solid #fff'}}>
                {/*  input base is the search bar i think*/}               
<inputBase/>
           </Grid>
{/* end griditem */}
        
        {/* start grid item */}
            <Grid item sm={6} style={{border: '1px solid magenta'}}>
       <IconButton>
           <Badge badgeContent={3} color="secondary">
               <NotificationsNoneIcon/>
           </Badge>
           </IconButton>
           <IconButton>
           <Badge badgeContent={4} color="secondary">
               <ChatBubbleOutlineIcon/>
           </Badge>
       </IconButton>
       <IconButton>
               <MeetingRoomIcon/>
       </IconButton>

        </Grid>
{/* end grid item */}

           </Grid>
           
           </Toolbar>     
           </AppBar>
    )
}