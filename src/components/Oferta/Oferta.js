import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { getDocs, collection, query, limit } from "firebase/firestore"; 
import "./oferta.css"

function Card({ ofertaFiltrar }) {
  const [productList, setProductsList] = useState([]);
  const productosRef = collection(db, "productos");

  useEffect(() => {
    const getProductList = async () => {
      const q = query(productosRef);
      const data = await getDocs(q);
      const dataFilter = data.docs.map((doc) => ({ ...doc.data(), id: doc.id,}));
      setProductsList(dataFilter);
    };
    getProductList();
  }, []);

  const productosFiltrados = productList.filter(producto => producto.oferta === ofertaFiltrar);

  return (
    <div className="galeria">
      {productosFiltrados.map((product) => (
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

  