import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { EmptyCart } from '../components/EmptyCart';


const Cart = () => {

    const { cart, getTotalCart, clear, getTotalPrice, shipping, total } = useCartContext()

    return (

        <div class='h-screen bg-violet-200'>

            <div class='py-12'>
                <div class='max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl'>
                    <div class='md:flex '>
                        <div class='w-full p-4 px-5 py-5'>

                            {cart.length ? (
                                <>
                                    <div class='md:grid md:grid-cols-3 gap-2 '>
                                        <div class='col-span-2 p-5 '>

                                            <h1 class='text-xl font-bold '>Tu carrito 🛍️🐹</h1>
                                            <span onClick={clear} className='px-4 py-2 hover:bg-violet-100 text-center text-sm text-red-500 rounded duration-300'>Vaciar carrito</span>

                                            <div className='flex justify-start mt-8 mb-3'>
                                                <h3 className='font-semibold text-gray-600 text-xs uppercase w-2/5'>Articulo</h3>
                                                <h3 className='font-semibold text-gray-600 text-xs uppercase w-1/5 text-center'>Cantidad</h3>
                                                <h3 className='font-semibold text-gray-600 text-xs uppercase w-1/5 text-center'>Precio x u.</h3>
                                                <h3 className='font-semibold text-gray-600 text-xs uppercase w-1/5 text-center'>Total</h3>
                                            </div>

                                            <div>
                                                {cart.map((item) =>
                                                    <CartItem key={item.id} item={item} />
                                                )
                                                }
                                            </div>

                                            <div class='flex justify-between items-center mt-6 pt-6 border-t'>
                                                <div class='flex items-center'>
                                                    <Link to={'/categoria'}><button className='px-4 py-2 hover:bg-violet-200 text-center text-sm text-purple-500 rounded duration-300'>
                                                        Seguir comprando</button>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>

                                        <div class=' p-5 bg-violet-200 rounded overflow-visible'>

                                            <div>
                                                <h3 className='text-1xl font-semibold leading-6 text-gray-800'>Resumen de compra</h3>
                                            </div>

                                            <div className='flex mt-7 flex-col items-end w-full space-y-6'>
                                                <div className='flex justify-between w-full items-center'>
                                                    <p className='text-lg leading-4 text-gray-600'>Total productos</p>
                                                    <p className='text-lg font-semibold leading-4 text-gray-600'>{getTotalCart()}</p>
                                                </div>

                                                <div className='flex justify-between w-full items-center'>
                                                    <p className='text-lg leading-4 text-gray-600'>Envío</p>
                                                    <p className='text-lg font-semibold leading-4 text-gray-600'>${shipping()}</p>
                                                </div>
                                                <div className='flex justify-between w-full items-center'>
                                                    <p className='text-lg leading-4 text-gray-600'>Sub total</p>
                                                    <p className='text-lg font-semibold leading-4 text-gray-600'>${getTotalPrice()}</p>
                                                </div>
                                            </div>
                                            <div className='flex justify-between w-full items-center mt-32'>
                                                <p className='text-xl font-semibold leading-4 text-gray-800'>Total</p>
                                                <p className='text-lg font-semibold leading-4 text-gray-800'>${total()}</p>
                                            </div>

                                            <Link to={'/checkout'}>
                                                <button className='px-4 py-2 mt-12 bg-purple-500 hover:bg-violet-700 disabled:opacity-75 text-center text-bold text-white rounded duration-300'>
                                                Finalizar compra</button>
                                            </Link>

                                        </div>

                                    </div>
                                </>
                            )
                                :
                                (
                                    <EmptyCart />
                                )}
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Cart