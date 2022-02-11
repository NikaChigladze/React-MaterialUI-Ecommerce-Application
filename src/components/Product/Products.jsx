import React from 'react';
import Product from './Product';
import { Grid } from '@mui/material';

const Products = ({ products, cartItems, setCartItems, dispatch }) => {
  return (
    <main>
      <Grid
        container
        spacing={0}
        align='center'
        container
        spacing={{ xs: 1, md: 3 }}
        columns={{ xs: 4, sm: 1, md: 12 }}
      >
        {products.map((product) => (
          <Product
            key={product.id}
            {...product}
            totalProducts={cartItems}
            handlePurchase={setCartItems}
            dispatch={dispatch}
          />
        ))}
      </Grid>
    </main>
  );
};

export default Products;
