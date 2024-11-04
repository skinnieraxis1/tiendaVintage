import './Navbar.css';
import { useContext } from 'react';
import { IoBagHandle } from "react-icons/io5";
import { BiSolidCameraMovie } from "react-icons/bi";
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const changePath = (path) => {
    switch (path) {
      case 'inicio':
        navigate('/');
        break;
      case 'cart':
        navigate('/cart');
        break;
      default:
        break;
    }
  }

  return (
    <div className="navbar">
      <div className='leftDiv'></div>
      <div className="title" onClick={() => changePath('inicio')}>
        <BiSolidCameraMovie className='camera'/>
        <h1 className='old-standard-tt-regular'>VINTAGE STORY</h1>
      </div>
      <div className="cart" onClick={() => changePath('cart')}>
        <IoBagHandle className='cartIcon' />
        <div><h3>{cartItems.length}</h3></div>
      </div>
    </div>
  );
}

export default Navbar;
