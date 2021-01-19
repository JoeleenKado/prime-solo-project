import React from 'react'
import ArtForm from './ArtForm'
import PageHeader from '../PageHeader/PageHeader'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {AppBar, Toolbar, Grid, Badge, IconButton, makeStyles, InputBase, Paper} from '@material-ui/core'

const useStyles = makeStyles(theme =>({
    pageContent: {
        margin:theme.spacing(7),
        padding: theme.spacing(3)
    }
}))


export default function Art() {

    const classes = useStyles();

    return(
<>
        {/* <PageHeader 
      title="New Artist"
      subTitle="Form design with validation"
      icon={<FavoriteBorderIcon fontSize="large"/>}
      /> */}
<Paper className={classes.pageContent}>
       <ArtForm/>
       </Paper>
       </>
    )
}