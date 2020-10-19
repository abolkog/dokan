import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { appConfig } from '../services/config';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}));

const ProductCard = ({ product }) => {
  const classes = useStyles();
  const { photo } = product;

  return (
    <Card className={classes.root}>
      <CardHeader title={product.name} subheader={`$${product.price}`} />
      <CardMedia
        className={classes.media}
        image={`${appConfig.apiURL}${photo.url}`}
        title={product.name}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button color='primary' variant='contained' fullWidth>
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
