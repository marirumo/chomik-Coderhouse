import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/CartContext';
import Cart from './components/Cart';

const App = () => {

  return (
    <BrowserRouter>

      <CartProvider>

        <NavBar />

        <Routes>

          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />

        </Routes>

        <Footer />

      </CartProvider>

    </BrowserRouter>


  );
}

export default App;
