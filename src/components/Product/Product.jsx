import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Product = ({
  id,
  image,
  name,
  description,
  price,
  totalProducts,
  handlePurchase,
  dispatch,
}) => {
  const newProduct = {
    id: new Date().getTime().toString(),
    name,
    image,
    description,
    price,
  };
  return (
    <Grid item xs={4}>
      <Card variant='outlined' sx={{ maxWidth: 345, mb: 5 }}>
        <CardMedia component='img' image={image} alt={name} height='350' />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
          <Typography
            variant='h6'
            color='text.secondary'
            style={{ fontWeight: 'bolder' }}
          >
            ${price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size='small'
            variant='contained'
            onClick={() => {
              handlePurchase(totalProducts + 1);
              dispatch({ type: 'PURCHASE_ITEM', payload: newProduct });
            }}
          >
            <Link
              to='/cart'
              style={{
                textDecoration: 'none',
                color: '#fff',
              }}
            >
              Purchase
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
