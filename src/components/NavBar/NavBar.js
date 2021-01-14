import React from 'react';
import {AppBar, Toolbar, Grid, Badge, IconButton, makeStyles, InputBase, } from '@material-ui/core'
//styling
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import SearchIcon from '@material-ui/icons/Search';
//import { CallMissedSharp } from '@material-ui/icons';

const useStyles = makeStyles(theme=>({
    root: {
        backgroundColor: 'yellow'
    },
    searchInput: {
        opacity: "0.6",
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        '&:hover':{
            backgroundColor: 'pink'
        },
        '& .MuiSvgIcon-root' :{
            marginRight: theme.spacing(1)
        }
    },
    // btnRoot: {
    //     backgroundColor: 'green'
    // },
    // btnLabel: {
    //    backgroundColor: 'blue' 
    // }
}))

export default function NavBar() {

const classes = useStyles();

    return(
        
       <AppBar position="static" className={classes.root}>   
       <Toolbar>
           <Grid container
           alignItems="center">
           
         <Grid item sm>
<InputBase
placeholder="Search"
className={classes.searchInput}
startAdornment={<SearchIcon fontSize="small"/>}
/>
           </Grid>  
           {/* to get my nav button on far left use sm={0}on both my items */}
        <Grid item sm></Grid>
        {/* start grid item */}
            <Grid item>
       <IconButton className={classes.btnLabel}>
           <Badge badgeContent={3} color="primary">
               <NotificationsNoneIcon fontSize="small"/>
           </Badge>
           </IconButton>
           <IconButton className={classes.btnLabel}>
           <Badge badgeContent={4} color="primary">
               <ChatBubbleOutlineIcon fontSize=""/>
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