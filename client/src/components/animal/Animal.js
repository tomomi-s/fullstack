import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    marginBottom: 20
  },
  title: {
    fontSize: 14,
  },
});

const Animal = ({index, animal:{name, image, animal}}) => {
	const classes = useStyles();
	const rendered = true;
	return (
		<Grow in={rendered} timeout={2000}>
			<Grid item xs={12} sm={6} md={4} >
				<Card className={classes.root}>
			      <CardActionArea>
			        <CardMedia
			          component="img"
			          alt="Contemplative Reptile"
			          height="200"
			          image={image}
			          title="Contemplative Reptile"
			        />
			        <CardContent>
			        	<Typography className={classes.title} color="textSecondary" gutterBottom>
			          		{animal}
			        </Typography>
			          <Typography gutterBottom variant="h5" component="h2">
			            {index + 1}. {name}
			          </Typography>
			        </CardContent>
			      </CardActionArea>
			    </Card>
		    </Grid>
	    </Grow>
	)
}

Animal.propTypes = {
	index: PropTypes.number.isRequired,
	animal: PropTypes.object.isRequired,
}

export default Animal