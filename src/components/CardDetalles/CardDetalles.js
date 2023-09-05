import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { db } from "../../config/firebase";
import { getDoc, doc } from "firebase/firestore";
import { CartContext } from "../../Context/CartContext";
import Contador from "../Contador/Contador";
import "./cardDetalles.css";

function CardDetalles() {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [cantidadAgregada, setCantidadAgregada] = useState(0); 
  const {addItem} = useContext(CartContext)

  const agregar = (cantidad) => {
    setCantidadAgregada(cantidad);

    const item = {
     nombre : productDetails.nombre, 
     id : productId, 
     precio : productDetails.precio
    }

    addItem(item, cantidad)
  };

  const getProductDetails = async () => {
    try {
      const productDocRef = doc(db, "productos", productId);
      const productDocSnap = await getDoc(productDocRef);
      if (productDocSnap.exists()) {
        const productData = productDocSnap.data();
        setProductDetails(productData);
      } else {
        console.log("El producto no existe.");
      }
    } catch (error) {
      console.error("Error al obtener los detalles del producto:", error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [productId]);

  return (
    <div className="mostrar-detalles">
      {productDetails && (
        <div className="contenedor-detalles">
          <h2 className="nombre-producto">{productDetails.nombre}</h2>
          <img className="img-xxl" src={productDetails.xxl} alt="img-detalle"></img>
          <p className="precio-detalle">Precio: ${productDetails.precio}</p>
          <div>
            {
              cantidadAgregada > 0 ? (
                <Link className="terminar-compra" to="/carrito">Terminar Compra</Link>
              ) : (
                <Contador inicial={1} stock={productDetails.stock} onAdd={agregar}/>
              )
            }
          </div>
        </div>
      )}
    </div>
  );
}

export default CardDetalles;
