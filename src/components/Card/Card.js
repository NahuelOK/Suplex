import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { getDocs, collection, query} from "firebase/firestore"; 
import { Link } from "react-router-dom";
import "./card.css"

function Card({ categoriaFiltrar }) {
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
  },[]);

  const productosFiltrados = productList.filter(producto => producto.categoria === categoriaFiltrar);

  return (
    <div className="galeria">
      {productosFiltrados.map((product) => (
        <div className="card-produ" key={product.id}>
          <img className="img-producto" src={product.url} alt={`Imagen de ${product.nombre}`}/>
          <div>
          <h3  className="nombre-produ">{product.nombre}</h3>
            <h3 className="precio-produ">{product.precio}$</h3>
          </div>
            <Link to={`/DetalleProducto/${product.id}`} className="boton-ver">VER</Link>
        </div>
      ))}
    </div>
  );
}

export default Card;

  