import React from 'react'
import {Paper, Card, Typography, makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    root: {
        backgroundColor: '#7a4c91'
    },
    PageHeader: {
        padding: theme.spacing(4),
        display: 'flex',
        marginBottom: theme.spacing(3)
    }
}))

export default function PageHeader(props) {
    const classes = useStyles()
    const {title, subTitle, icon} = props;
    return(
    
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.PageHeader}>
            <div>
                <Card>
                    {icon}
                </Card>
                <div><Typography
                variant="h6"
                component="div"
                >{title}
                </Typography>
                <Typography
                variant="subtitlte2"
                component="div"
                >{subTitle}
                </Typography>
                </div>
                </div>
                </div>
            </Paper>
            
    )
}