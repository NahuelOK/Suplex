import React, { useState } from 'react';
import "./contador.css"

const Contador = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const saveCount = () => {
    console.log(`Cantidad elegida: ${count}`);
  };

  return (
    <div>
        <div className='ajust-contador mb-4'>   
            <button className='btn btn-primary' onClick={decrement}>-</button>
            <p>Cantidad actual: {count}</p>
            <button className='btn btn-primary' onClick={increment}>+</button>
        </div>
        <a href="#" className="btn btn-primary" onClick={saveCount}>Comprar</a>
    </div>
  );
};

export default Contador;
