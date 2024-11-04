// App.js
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
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
          "https://i.pinimg.com/originals/ae/85/b2/ae85b2378f3484b3091c31f959f3179a.jpg", 
          "https://i.pinimg.com/736x/7f/f0/53/7ff0532ffcaa44d694df47aca2be9b40.jpg", 
          "https://upload.wikimedia.org/wikipedia/commons/2/25/Charly_Garc%C3%ADa_por_Alejandro_Kuropatwa.jpg", 
          "https://i.pinimg.com/564x/a7/13/d4/a713d44bc58ebe8a62957d17092499d4.jpg"]} 
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
        onCardSelect={(genre) => navigate(`/tiendaVintage/shop/${genre}`)} 
      />
      <CardSqueme 
        title="Most Popular" 
        photo_icon={[
          "https://upload.wikimedia.org/wikipedia/commons/2/25/Charly_Garc%C3%ADa_por_Alejandro_Kuropatwa.jpg", 
          "https://i.pinimg.com/564x/a4/b0/08/a4b008cd249164aa4360d0e33d66fd3d.jpg", 
          "https://i.pinimg.com/564x/45/8f/62/458f62fe6c6a882958f065d47dfcaedc.jpg", 
          "https://i.pinimg.com/564x/0a/d3/c2/0ad3c2ba799fc0420d6cbaeb7f6dbd2a.jpg"]} 
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
        onCardSelect={(genre) => navigate(`/tiendaVintage/shop/${genre}`)} 
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
            <Route path="/tiendaVintage" element={<MainContent />} />
            <Route path="/tiendaVintage/shop/:genre" element={<Shop />} />
            <Route path="/tiendaVintage/cart" element={<Cart />} />
          </Routes>
          <div className='ui divider spaceLine'></div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
