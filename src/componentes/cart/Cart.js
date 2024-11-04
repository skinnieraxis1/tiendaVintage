import { useContext } from "react";
import { CartContext } from '../../context/CartContext';
import { Table, Button } from 'semantic-ui-react';
import './Cart.css'; // Asegúrate de tener estilos si los necesitas

const Cart = () => {
    const { cartItems, removeItems, setCartItems } = useContext(CartContext);

    const handleCheckout = () => {
        alert('Compra realizada con éxito!');
        cartItems.forEach(item => removeItems(item.id));
    };

    const style = {
        padding:"0 20svh",
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }

    return (
        <div style={style}>
            <div className="card-squeme-title">
                <h2 className="old-standard-tt-regular">Your Cart</h2>
            </div>
            {cartItems.length > 0 ? (
                <>
                    <Table very basic collapsing celled table>
                        <Table.Header>
                            <Table.Row>
                                
                                <Table.HeaderCell>Acciones</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {cartItems.map((item) => (
                                <Table.Row key={item.id}>
                                    <Table.Cell>
                                        <h1 className="ui image header">
                                            <img src={item.imagen} alt={item.nombre} className="ui rounded image"/>
                                            <div className="content">
                                                {item.nombre}
                                                <div className="sub header">${item.precio.toFixed(2)}
                                            </div>
                                            </div>
                                        </h1>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button 
                                            color='red' 
                                            onClick={() => removeItems(item.id)}
                                        >
                                            Eliminar
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                    <Button 
                        primary 
                        onClick={handleCheckout}
                        style={{ marginTop: '20px' }}
                    >
                        Realizar Compra
                    </Button>
                </>
            ) : (
                <h3 className="no-product">No hay productos en el carrito.</h3>
            )}
        </div>
    );
};

export default Cart;
