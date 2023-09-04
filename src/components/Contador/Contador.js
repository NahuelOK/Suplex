import React, { useState } from 'react';
import "./contador.css"

const Contador = ({stock, inicial, onAdd}) => {
  const [count, setCount] = useState(inicial);

  const suma = () => {
    if(count < stock){
      setCount(count + 1);
    }
  };

  const resta = () => {
    if(count > 1){
      setCount(count - 1);
    }
  };

  return (
    <div className='contenedor-contador'>
        <div className='ajust-contador mb-4'>   
            <button className='botones' onClick={resta}>-</button>
            <p className='cantidad-a-comprar'>Cantidad: {count}</p>
            <button className='botones' onClick={suma}>+</button>
        </div>
        <button className="boton-comprar" onClick={() => onAdd(count)}>COMPRAR</button>
    </div>
  );
};

export default Contador;
