import React from "react";
import { Paper, Card, Typography, makeStyles } from "@material-ui/core";
import { Block } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#7a4c91",
  },
  PageHeader: {
    padding: theme.spacing(4),
    display: "flex",
    marginBottom: theme.spacing(3),
  },
  pageIcon: {
    display: "inline block",
    pading: theme.spacing(2),
    marginRight: "10px",
    color: "#83914c",
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
    "& .MuiTypography-subtitle2": {
      opacity: "0.6",
    },
  },
}));

export default function PageHeader(props) {
  const classes = useStyles();
  const { title, subTitle, icon } = props;
  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.PageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>
        <div clasName={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitlte2" component="div">
            {subTitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
