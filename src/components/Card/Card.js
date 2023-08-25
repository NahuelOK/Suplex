import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { getDocs, collection, query, limit } from "firebase/firestore"; 
import "./card.css"

function Card() {
  const [productList, setProductsList] = useState([]);
  const productosRef = collection(db, "productos");

  useEffect(() => {
    const getProductList = async () => {
      const q = query(productosRef, limit(10));
      const data = await getDocs(q);
      const dataFilter = data.docs.map((doc) => ({ ...doc.data(), id: doc.id,}));
      setProductsList(dataFilter);
    };
    getProductList();
  }, []);

  return (
    <div className="galeria">
      {productList.map((product) => (
        <div className="card-produ" key={product.id}>
          <img className="img-producto" src={product.url} alt={`Imagen de ${product.nombre}`}/>
          <div>
          <h3  className="nombre-produ">{product.nombre}</h3>
            <h3 className="precio-produ">{product.precio}$</h3>
          </div>
            <button className="boton-ver" id={product.id}>VER</button>
        </div>
      ))}
    </div>
  );
}

export default Card;

  