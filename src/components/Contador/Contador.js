import React, { useState } from 'react';
import "./contador.css"

const Contador = () => {
  const [count, setCount] = useState(0);

  const suma = () => {
    setCount(count + 1);
  };

  const resta = () => {
    if(count !== 0){
      setCount(count - 1);
    }
  };

  const guardarCantidad = () => {
    if(count!== 0){
      console.log(`Cantidad elegida: ${count}`);
    }
  };

  return (
    <div className='contenedor-contador'>
        <div className='ajust-contador mb-4'>   
            <button className='botones' onClick={resta}>-</button>
            <p className='cantidad-a-comprar'>Cantidad: {count}</p>
            <button className='botones' onClick={suma}>+</button>
        </div>
        <button className="boton-comprar" onClick={guardarCantidad}>COMPRAR</button>
    </div>
  );
};

export default Contador;
