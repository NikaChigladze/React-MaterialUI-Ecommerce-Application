import React, { useState, useReducer } from 'react';
import NavigationBar from './components/Navbar/NavigationBar';
import Products from './components/Product/Products';
import Cart from './components/Cart/Cart';
import Finish from './components/Finish/Finish';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const data = [
  {
    id: 1,
    image:
      'https://media.ldlc.com/r1600/ld/products/00/05/74/18/LD0005741834_1.jpg',
    name: 'Playstation 5',
    description: 'Sony Playstation 5',
    price: 750,
  },
  {
    id: 2,
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_US?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632948875000',
    name: 'Macbook',
    description: 'Apple Macbook Pro',
    price: 899,
  },
  {
    id: 3,
    image:
      'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1629842712000',
    name: 'Iphone 13',
    description: 'Apple Iphone 13 128GB',
    price: 700,
  },
  {
    id: 4,
    image:
      'https://i01.appmifile.com/webfile/globalimg/in/cms/528D4EBF-9DB2-04D7-A1EB-24E4D73E0ABF.jpg',
    name: 'Xiaomi Redmi 8',
    description: 'Xiaomi Redmi Model 8 - 4/64',
    price: 200,
  },
  {
    id: 5,
    image:
      'https://www.ogeda.cn/wp-content/uploads/2018/07/NAVIFORCE-Top-Luxury-Brand-Men-Quartz-Watch-Sport-Fashion-Casual-Men-Watches-Date-Week-Waterproof-Male.jpg',
    name: 'Quartz Watch',
    description: 'Quartz Waterproof Watch',
    price: 130,
  },
  {
    id: 6,
    image:
      'https://hocotech.com/wp-content/uploads/2019/07/hoco-w21-graceful-charm-wire-control-headphones-overview.jpg',
    name: 'Hoco W21 Headphones',
    description: 'Hoco Headphones Model W21 With Mic',
    price: 40,
  },
];

const reducer = (state, action) => {
  if (action.type === 'PURCHASE_ITEM') {
    const newProducts = [...state.products, action.payload];
    return {
      ...state,
      products: newProducts,
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    const newProducts = state.products.filter(
      (product) => product.id !== action.payload
    );
    return {
      ...state,
      products: newProducts,
    };
  }
};

const defaultState = {
  products: [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [cartItems, setCartItems] = useState(0);
  const [finished, setFinished] = useState(false);

  let total = 0;
  for (let i = 0; i < state.products.length; i++) {
    total += state.products[i].price;
  }

  return (
    <>
      <div className='container'>
        <BrowserRouter>
          <NavigationBar cartItems={cartItems} />
          <Routes>
            <Route
              path='/'
              element={
                <Products
                  products={data}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  dispatch={dispatch}
                />
              }
            />
            <Route
              path='cart'
              element={
                <Cart
                  products={state.products}
                  dispatch={dispatch}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  total={total}
                  setFinished={setFinished}
                />
              }
            />
            <Route path='finish' element={<Finish finished={finished} total={total} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
