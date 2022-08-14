import { Link } from 'react-router-dom';

const Item = ({ title, img, price, id }) => {

    return (
        <>
            <div className='w-56 h-80 bg-white drop-shadow-md rounded-lg'>
                <img className='rounded-tl-lg rounded-tr-lg h-1/2 w-full object-cover' src={img} alt='item' />
                <div className='px-5 py-3 space-y-2'>

                    <h3 className='text-lg ont-semibold'>{title}</h3>

                    <p className='space-x-2'>
                        <span className='text-2xl font-semibold'> ${price}</span>
                        <span className='text-sm line-through text-gray-500'>$1000</span>
                        <span className='text-sm text-green-700'>40% off</span>
                    </p>

                    <div className='flex justify-between items-center pt-3 pb-2'>
                        <Link to={`/product/${id}`}
                            className='px-4 py-2 bg-purple-500 hover:bg-violet-700 text-center text-sm text-white rounded duration-300'>
                            Ver detalle</Link>

                        <Link to='/' title='Add to Favorites'
                            className='text-2xl text-gray-300 hover:text-red-500 duration-300'>&hearts;</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item