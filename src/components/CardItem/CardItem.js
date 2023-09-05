

const CardItem = ({nombre, precio, cantidad }) => {
    return (
      <div className="card-item">
        <p>{nombre}</p>
        <p>Precio: ${precio}</p>
        <p>Cantidad: {cantidad}</p>
      </div>
    );
  };
  
  export default CardItem;