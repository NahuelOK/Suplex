import "./carritoVista.css"
import {useContext} from "react"
import {CartContext} from "../../Context/CartContext"
import CardItem from "../CardItem/CardItem"
import { Link } from "react-router-dom"

const CarritoVista = () => {
    const {cart, clearCart, totalCantidad, total} = useContext(CartContext)

    if (totalCantidad === 0){
        return(
            <div className="sin-produ">
                <h1>No hay productos en el carrito</h1>
                <Link to="/">Ver Productos</Link>
            </div>
        )
    }

    return(
        <div className="carro-info">
            {cart.map(p => <CardItem key={p.id} {...p}/>) }
            <button className="boton-borrar" onClick={() => clearCart()}>Limpiar carro</button>
            <h3 className="total-a-pagar">Total: ${total}</h3>
            <div className="botones-final">
                <Link className="seguir" to="/">Seguir Comprando</Link>
                <Link className="check" to="/checkout">Checkout</Link>
            </div>
        </div>
    )
}

export default CarritoVista;