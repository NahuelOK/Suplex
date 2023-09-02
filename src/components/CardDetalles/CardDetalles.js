import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { getDocs, collection, query } from "firebase/firestore";
import Contador from "../Contador/Contador"

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
  }, []);

  const productoDetalles = productList.find((producto) => producto.id === productId);

  return (
    <div>
      <h1>Detalles del Producto</h1>
      {productoDetalles && (
        <div>
          <h2>{productoDetalles.nombre}</h2>
          <img src={productoDetalles.xxl}></img>
          <p>{productoDetalles.precio}$</p>
          <Contador/>
        </div>
      )}
    </div>
  );
}

export default CardDetalles;