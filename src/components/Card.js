import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { getDocs, collection, query, limit } from "firebase/firestore"; 

function Card() {
  const [productList, setProductsList] = useState([]);
  const productosRef = collection(db, "productos");

  useEffect(() => {
    const getProductList = async () => {
      const q = query(productosRef, limit(5));
      const data = await getDocs(q);
      const dataFilter = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log(dataFilter);
      setProductsList(dataFilter);
    };
    getProductList();
  }, []);

  return (
    <div>
      {productList.map((product) => (
        <div key={product.id}>
          <h1>Nombre del producto: {product.nombre}</h1>
          <h2>Precio: {product.precio}$</h2>
          <img src={product.url} alt={`Imagen de ${product.nombre}`} />
        </div>
      ))}
    </div>
  );
}

export default Card;

  