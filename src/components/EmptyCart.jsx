import { Link } from 'react-router-dom'

export const EmptyCart = () => {
    return (

        <div className='p-8 text-center'>
            
            <h2 className='text-2xl font-medium'>
                🛍️ Tu carrito está vacío.
            </h2>

            <p className='mt-4 text-md text-gray-500'>
                Añande algún regalo para tu amigo 🐹
            </p>

            <Link to={'/categoria'}>
                <button className='px-4 py-2 bg-purple-500 hover:bg-violet-700 disabled:opacity-75 text-center text-bold text-white rounded duration-300 mt-8'>
                    Ir a tienda</button>
            </Link>

        </div>

    )
}
