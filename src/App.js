// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/navbar/Navbar.js';
import Carrusel from './componentes/carrusel/Carrusel.js';
import CardSqueme from './componentes/CardSqueme/CardSqueme.js';
import Shop from './componentes/shop/Shop.js';
import Footer from './componentes/footer/Footer.js';
import Cart from './componentes/cart/Cart.js';
import { CartProvider } from './context/CartContext.js';
import './App.css';
import { useNavigate } from 'react-router-dom';

const MainContent = () => {
  const navigate = useNavigate();

  return (
    <>
      <Carrusel />
      <CardSqueme 
        title="Our Designs" 
        photo_icon={[
          "/img/card-photo-1.jpg", 
          "/img/card-photo-2.jpg", 
          "/img/card-photo-3.jpg", 
          "/img/card-photo-4.jpg"]} 
        cardTitle={[
          "Cosplays", 
          "suits", 
          "Vintage Outfits", 
          "Friki Oversized"]}
        genres={[
          "Cosplays",
          "suits",
          "Vintage Outfits",
          "Friki Oversized"
        ]}
        onCardSelect={(genre) => navigate(`/shop/${genre}`)} 
      />
      <CardSqueme 
        title="Most Popular" 
        photo_icon={[
          "/img/card-photo-3.jpg", 
          "/img/card-photo-5.jpg", 
          "/img/card-photo-6.jpg", 
          "/img/card-photo-7.jpg"]} 
        cardTitle={[
          "Vintage Outfits", 
          "80's Style", 
          "Alternative Style",
          "Oversized Style"]}
        genres={[
          "Vintage Outfits",
          "80's Style",
          "Alternative Style",
          "Friki Oversized"
        ]}
        onCardSelect={(genre) => navigate(`/shop/${genre}`)} 
      />
    </>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar/>
          <div className='ui divider spaceLine'></div>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/shop/:genre" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <div className='ui divider spaceLine'></div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
