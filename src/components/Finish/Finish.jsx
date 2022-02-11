import React from 'react';

const Finish = ({ finished, total }) => {
  {
    if (finished) {
      return (
        <div
          className='container'
          style={{
            paddingTop: '50px',
            textAlign: 'center',
          }}
        >
          <h2>You have succesfully finished payment!</h2>
          <p>Total: ${total}</p>
        </div>
      );
    } else {
      return (
        <div
          className='container'
          style={{
            paddingTop: '50px',
            textAlign: 'center',
          }}
        >
          <h2>Finish payment</h2>
        </div>
      );
    }
  }
};

export default Finish;
