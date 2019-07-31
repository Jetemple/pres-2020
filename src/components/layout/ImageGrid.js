import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from "./Card";
import Popover from "./popup";
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
      <Grid container spacing={1} >
        <Grid container   justify="center" item xs={6} lg={4}>
          <Card className={classes.paper}  >xs</Card>
        </Grid>
        <Grid container justify="center" item xs={6} lg={4}>
          <Card className={classes.paper}>xs</Card>
        </Grid>
        <Grid container justify="center" item xs lg={4}>
          <Card className={classes.paper}>xs</Card>
        </Grid>
        <Grid container justify="center" item xs lg={4}>
          <Card className={classes.paper}>xs</Card>
        </Grid>
        <Grid container justify="center" item xs>
          <Card className={classes.paper}>xs</Card>
        </Grid>
        <Grid container justify="center" item xs>
          <Card className={classes.paper}>xs</Card>
        </Grid>
        <Grid container justify="center" item xs>
          <Card className={classes.paper}>xs</Card>
        </Grid>
        <Grid container justify="center" item xs>
          <Card className={classes.paper}>xs</Card>
        </Grid>
        
      </Grid>

      </Container>
    </div>
  );
}