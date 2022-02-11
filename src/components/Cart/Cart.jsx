import React from 'react';
import CartProduct from './CartProduct';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Cart = ({
  products,
  showAlert,
  dispatch,
  setCartItems,
  cartItems,
  total,
  setFinished,
}) => {
  return (
    <div>
      <Grid container spacing={0} align='center' sx={{ mt: 5, pl: 5, pr: 5 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell align='left'>Image</TableCell>
                <TableCell align='center'>Product Name</TableCell>
                <TableCell align='center'>Product Price</TableCell>
                <TableCell align='center'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <CartProduct
                  key={product.id}
                  {...product}
                  dispatch={dispatch}
                  totalItems={cartItems}
                  handleRemove={setCartItems}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid
          container
          spacing={0}
          sx={{ mt: 1 }}
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Grid item xs={6} align='left'>
            <h3>Total: ${total}</h3>
          </Grid>
          <Grid item xs={6} align='right'>
            {total ? (
              <Button
                variant='contained'
                onClick={() => {
                  setFinished(true);
                }}
              >
                <Link
                  to='/finish'
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                  }}
                >
                  Finish Payment
                </Link>
              </Button>
            ) : (
              ''
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
