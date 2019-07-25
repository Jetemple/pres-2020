import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
      
    },
    media: {
      height: 140,
    },
  });
  
  export class  CandidateItem extends Component{
    //  classes = useStyles();
      render(){
  
    return (
      <Card className={{maxWidth: 345}}>
        <CardActionArea>
          <CardMedia
            className={{height: 140}}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {this.props.candidate.Name}
            </Typography>
            
            {/* <Typography variant="body2" color="textSecondary" component="p" >
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              acros
            // </Typography> */}
          </CardContent>
        </CardActionArea>
        <CardContent>
            <h5>
                Party: 
                <br/>
                Leans: Left
                <br/>
                Climate Change: Belief
            </h5>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default CandidateItem;

//   CandidateItem.propTypes = {
//       name: PropTypes.object
//   }