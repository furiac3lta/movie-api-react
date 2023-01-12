import React from 'react'
import { useState } from 'react';

export const contador = () => {
    const [contador, setContador] = useState(0);
    const contar = () => setContador(contador + 1);

    
  return (
   <>
    <h1>{contador}</h1>
    <button onClick={contar} > click</button>
    </>
  )
}
