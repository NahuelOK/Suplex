import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import cartImg from './assets/cart2.svg';
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext);

    return (
        <Link to="./carrito" className="btn position-relative">
            <img src={cartImg} className='ajust-carro'/>
            <span className="position-absolute top-0 start-98 translate-middle badge rounded-pill bg-danger">
                {totalCantidad}
            </span>
        </Link>
    );
}

export default CartWidget;