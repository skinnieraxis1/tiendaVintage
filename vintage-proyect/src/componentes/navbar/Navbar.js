import './Navbar.css';
import { IoBagHandle } from "react-icons/io5";
import { BiSolidCameraMovie } from "react-icons/bi";

function Navbar() {
  return (
    <div className="navbar">
      <div className='leftDiv'></div>
      <div className="title">
        <BiSolidCameraMovie className='camera'/>
        <h1 className='old-standard-tt-regular'>VINTAGE STORY</h1>
      </div>
      <div className="cart">
        <IoBagHandle className='cartIcon' />
      </div>
    </div>
  );
}

export default Navbar;
