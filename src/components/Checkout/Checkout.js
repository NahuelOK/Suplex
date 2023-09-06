import {CartContext} from "../../Context/CartContext"
import { useState, useContext} from "react";
import { db } from "../../config/firebase";
import { getDocs, collection, query, where, documentId, addDoc} from "firebase/firestore"; 
import { Timestamp, writeBatch } from "firebase/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const Checkout = () =>{
    const [cargando, setCargando] = useState(false)
    const [orderId, setOrderId] = useState("")

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({nombre, cel, email}) => {
        setCargando(true)

        try{
            const objOrder = {
                buyer:{
                    nombre, cel, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productosRef = collection(db, "productos");

            const productosAddedFromFirestore = await getDocs(query(productosRef,where(documentId(),"in", ids)))

            const { docs } = productosAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.cantidad

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity })
                }else{
                    outOfStock.push ({id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0){
                await batch.commit()

                const orderRef = collection(db, "ordenes")

                const orderAdd = await addDoc(orderRef, objOrder)

                setOrderId(orderAdd.id)
                clearCart()
            }else{
                console.error("hay productos fuera de stock")
                
            }
        } catch(error){
            console.log(error)
        } finally{
            setCargando(false)
        }
    }

    if(cargando){
        return <h1>Se está cargando su orden...</h1>
    }
    if(orderId){
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return(
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout;