import { useState, useEffect } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {

  const [count, setCount] = useState(parseInt(initial));

  const decrease = () => {
    count <= initial ? setCount(initial) : setCount(count - 1)
  };

  const increase = () => {
    count >= stock ? setCount(stock) : setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  },[initial])
 

  return (
    <>
      <div className='rounded-md space-x-4 space-y-6'>

        <div className='flex border justify-between border-gray-300 p-1 rounded-md'>
          
          <button disabled={count <= 1} onClick={() => decrease({ initial })}
            className='bg-purple-500 text-white border p-1 rounded disabled:opacity-75'>
            -
          </button>

          <p className='text-black p-3'>
            {count}
          </p>

          <button onClick={() => increase({ stock })}
            className='bg-purple-500 text-white p-1 rounded'>
            +
          </button>

        </div>

        <button disabled={count <= 0} onClick={() => onAdd()}
          className='px-4 py-2 bg-purple-500 hover:bg-violet-700 disabled:opacity-75 text-center text-sm text-white rounded duration-300'>
          Agregar al carrito
        </button>

      </div>

    </>
  )
}

export default ItemCount