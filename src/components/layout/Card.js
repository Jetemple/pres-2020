import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
  card: {
    // maxWidth: 230,
    // minWidth: 230,
    width: "50vh",
    // height: "60vh"
    // maxHeight: ,
  },
  popover: {
    // maxWidth: 230,
    // minWidth: 230,
    width: "200vh",
    height: "90vh"
    // height: "60vh"
    // maxHeight: ,
  },
  media: {
    height: 1000,
  },
  typography: {
    padding: theme.spacing(2),
  },
  html: {
    fontSize: 16,
    [theme.breakpoints.up("sm")]: {
      fontSize: 18
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 20
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 24
    }
  }
}));

export default function MediaCard() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Card className={classes.card} onClick={handleClick} >
      <CardActionArea>
        <CardMedia style = {{ height: 50, paddingTop: '60%'}}
     image= {require ("../static/images/minion.jpg")} /> 
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography className={classes.html }variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging...
          </Typography>
          <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
  //       anchorReference="anchorPosition"
  // anchorPosition={{ top: "50vh", left: ""  }}
        anchorOrigin={{
          vertical: '50vh',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      ><Card className={classes.popover} >
        The content of the Popover.
        <br></br>
      
      
      
      </Card></Popover>



        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button className={classes.html } size="small" color="primary">
          Share
        </Button>
        <Button className={classes.html } size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}

      
    </Card>

    
  );
}

