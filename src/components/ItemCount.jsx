import React, { useState } from 'react';

const ItemCount = ({ stock, initial }) => {

  const [count, setCount] = useState(initial);

  const handleSubtract = () => {
    count <= initial ? setCount(initial) : setCount(count - 1)
  };

  const handleAdd = () => {
    count >= stock ? setCount(stock) : setCount(count + 1);
  };

  const onAdd = () => stock > 0 ? alert(`${count} unidades agregadas`) : alert('No hay stock');

  return (
    <>
      <div className='rounded-md space-x-4 space-y-6'>

        <div className='flex border justify-between border-gray-300 p-1 rounded-md'>

          <button onClick={() => handleSubtract({ initial })}
            className='bg-purple-500 text-white border p-1 rounded'>
            -
          </button>

          <p className='text-black p-3'>
            {count}
          </p>

          <button onClick={() => handleAdd({ stock })}
            className='bg-purple-500 text-white p-1 rounded'>
            +
          </button>

        </div>

        <button onClick={() => onAdd()}
          className='px-4 py-2 bg-purple-500 hover:bg-violet-700 text-center text-sm text-white rounded duration-300'>
          Agregar al carrito
        </button>

      </div>

    </>
  )
}

export default ItemCount