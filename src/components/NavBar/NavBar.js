import React from 'react';
import {AppBar, Toolbar, Grid, Badge, IconButton, makeStyles, InputBase} from '@material-ui/core'
//styling
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'yellow'
    }
})

export default function NavBar() {

const classes = useStyles();

    return(
        
       <AppBar position="static" className={classes.root}>   
       <Toolbar>
           <Grid container>
           
         <Grid item sm>
<InputBase
placeholder="Search"
startAdornment={<SearchIcon/>}/>
           </Grid>  
           {/* to get my nav button on far left use sm={0}on both my items */}
        <Grid item sm></Grid>
        {/* start grid item */}
            <Grid item>
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