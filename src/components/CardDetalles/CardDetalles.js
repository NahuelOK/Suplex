import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { getDocs, collection, query } from "firebase/firestore";
import Contador from "../Contador/Contador"
import "./cardDetalles.css"

function CardDetalles() {
  const { productId } = useParams();
  const [productList, setProductsList] = useState([]);
  const productosRef = collection(db, "productos");

  useEffect(() => {
    const getProductList = async () => {
      const q = query(productosRef);
      const data = await getDocs(q);
      const dataFilter = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setProductsList(dataFilter);
    };
    getProductList();
  }, [productosRef]);

  const productoDetalles = productList.find((producto) => producto.id === productId);

  return (
    <div className="mostrar-detalles">
      {productoDetalles && (
        <div className="contenedor-detalles">
          <h2 className="nombre-producto">{productoDetalles.nombre}</h2>
          <img className="img-xxl" src={productoDetalles.xxl} alt="img-detalle"></img>
          <p className="precio-detalle">Precio: ${productoDetalles.precio}</p>
          <Contador/>
        </div>
      )}
    </div>
  );
}

export default CardDetalles;