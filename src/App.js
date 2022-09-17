import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer';
import CartProvider from './context/CartContext';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

const App = () => {
  
  return (

    <BrowserRouter>
    
      <CartProvider>

        <NavBar />

        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/categoria' element={<ItemListContainer />} />
          <Route path='/categoria/:categoryId' element={<ItemListContainer />} />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />

        </Routes>

        <Footer />

      </CartProvider>

    </BrowserRouter>

  );
}

export default App;
