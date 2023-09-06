import "./checkoutForm.css"
import { useState } from "react"

const CheckoutForm = ({ onConfirm }) => {
    const [nombre, setNombre] = useState("")
    const [cel, setCel] = useState("")
    const [email, setEmail] = useState("")

    const handleConfirm = (event) =>{
        event.preventDefault()

        const userData = {
            nombre, cel, email
        }

        onConfirm(userData)
    }

    return(
        <div className="contenedor-form">
            <form onSubmit={handleConfirm} className="formulario-de-orden">
                <label className="labels-form">
                    Nombre
                    <input
                    className="inputt"
                    type="text"
                    value={nombre}
                    onChange={({ target })=> setNombre(target.value)} 
                    />
                </label>
                <label className="labels-form">
                    Celular
                    <input
                    className="inputt"
                    type="text"
                    value={cel}
                    onChange={({ target })=> setCel(target.value)} 
                    />
                </label>
                <label className="labels-form">
                    Email
                    <input
                    className="inputt"
                    type="email"
                    value={email}
                    onChange={({ target })=> setEmail(target.value)} 
                    />
                </label>
                <div>
                    <button type="submit" className="boton-orden">Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;