import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';


const Cart = () => {

    const { cart, getTotalCart, clear, getTotalPrice } = useCartContext()

    return (
        <main className='container mx-auto mt-10 bg-violet-200'>
            {cart.length ? (
                <>
                    <div className='flex my-10 bg-white'>
                        <div className='w-3/4 px-10 py-10'>

                            <div className='flex justify-between border-b p-8'>
                                <h1 className='font-semibold text-2xl'>Tu carrito 🛍️🐹
                                    <br />
                                    <Link to={'/'}><button className='px-4 py-2 hover:bg-violet-00 text-center text-sm text-purple-500 rounded duration-300'>
                                        Seguir comprando</button></Link></h1>
                                <h2 className='font-medium text-2xl'>Productos {getTotalCart()}
                                    <br />
                                    <span onClick={clear} className='px-4 py-2 hover:bg-violet-100 text-center text-sm text-red-500 rounded duration-300'>Vaciar carrito</span></h2>
                            </div>

                            <div className='flex justify-start mt-8 mb-3'>
                                <h3 className='font-semibold text-gray-600 text-xs uppercase w-2/5'>Articulo</h3>
                                <h3 className='font-semibold text-gray-600 text-xs uppercase w-1/5 text-center'>Cantidad</h3>
                                <h3 className='font-semibold text-gray-600 text-xs uppercase w-1/5 text-center'>Precio x u.</h3>
                                <h3 className='font-semibold text-gray-600 text-xs uppercase w-1/5 text-center'>Total</h3>
                            </div>
                            <div>
                                {cart.map((item) =>
                                    <ItemCart key={item.id} item={item} className='grid grid-cols-4 gap-4'> </ItemCart>
                                )
                                }
                            </div>
                        </div>
                        
                        <div className='w-1/4 px-10 py-10'>
                        <h5>Detalle de compra</h5>
                        <br />
                        <p>Total</p> <h6 className='font-semibold text-2xl text-orange-800'>${getTotalPrice()} precio final</h6>
                        <br />
                        <Link to={'/checkout'}><button className='px-4 py-2 bg-purple-500 hover:bg-violet-700 text-center text-sm text-white rounded duration-300'>
                        Finalizar compra</button></Link>
                        </div>    

                        <div>


                        </div>
                    </div>
                </>
            )
                :
                (
                    <div>
                        <h2 className='px-10 py-10'>🐹 Tu carrito está vacío.🐹</h2>
                        <Link to='/' className='px-4 py-2 bg-purple-500 hover:bg-violet-700 text-center text-sm text-white rounded duration-300'> Ver tienda </Link>
                    </div>
                )}
        </main>
    )
}

export default Cart;