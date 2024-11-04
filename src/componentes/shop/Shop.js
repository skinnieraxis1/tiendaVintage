import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom'; // Importar useParams
import { Card, Container } from 'semantic-ui-react';
import './Shop.css';
import { CartContext } from '../../context/CartContext';
import ropa from '../../database/ropa'; 

const Shop = () => {
    const { genre } = useParams(); // Obtener el género de los parámetros
    const { cartItems, addToCart } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [visibilidad, setVisibilidad] = useState({});

    useEffect(() => {
        const filteredProducts = ropa.filter(product => product.genero === genre);
        setProducts(filteredProducts);
    }, [genre]);

    const cambiarEstado = (id, nuevoEstado) => {
        setVisibilidad(prev => ({ ...prev, [id]: nuevoEstado }));
    };

    const handleAddToCart = (product) => {
        const newId = cartItems.length > 0 ? cartItems.slice(-1)[0].id_carrito + 1 : 0;
        addToCart({ ...product, id_carrito: newId });
    };

    return (
        <Container>
            <Card.Group itemsPerRow={3} stackable>
                {products.length > 0 ? (
                    products.map((product) => (
                        <Card 
                            key={product.id}
                            onMouseOver={() => cambiarEstado(product.id, true)} 
                            onMouseOut={() => cambiarEstado(product.id, false)}
                            style={{ position: 'relative' }}
                        >
                            <img src={product.imagen} alt={product.nombre} />
                            
                            <div 
                                className={`hiddenDiv ${visibilidad[product.id] ? 'visible' : ''}`}
                            >
                                <button onClick={() => handleAddToCart(product)}>Agregar al carrito</button>
                            </div>
                            
                            <Card.Content>
                                <Card.Header>{product.nombre}</Card.Header>
                                <Card.Meta>${product.precio.toFixed(2)}</Card.Meta>
                            </Card.Content>
                        </Card>
                    ))
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
            </Card.Group>
        </Container>
    );
};

export default Shop;
