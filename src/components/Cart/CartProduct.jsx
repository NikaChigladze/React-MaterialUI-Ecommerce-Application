import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';

const CartProduct = ({
  id,
  name,
  price,
  image,
  dispatch,
  totalItems,
  handleRemove,
}) => {
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component='th' scope='row'>
        <img
          src={image}
          alt=''
          style={{
            width: '100px',
          }}
        />
      </TableCell>
      <TableCell align='center'>{name}</TableCell>
      <TableCell align='center'>{price}</TableCell>
      <TableCell align='center'>
        <Button
          variant='outlined'
          color='error'
          onClick={() => {
            handleRemove(totalItems - 1);
            dispatch({
              type: 'REMOVE_ITEM',
              payload: id,
            });
          }}
        >
          Remove
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default CartProduct;
