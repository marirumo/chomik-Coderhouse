import { useCartContext } from '../context/CartContext'

const Cart = (item) => {

    const { cart, getTotalCart} = useCartContext()
    
    return (
        <>

            <div className='container mx-auto mt-10'>
                <div className='w-3/4 px-10 py-10'>

                    {cart.length ? (

                        <div className='flex justify-between border-b pb-8'>
                            <h1 className='font-semibold text-2xl'>Tu carrito</h1>
                            <h2 className='font-semibold text-2xl'>Productos {getTotalCart()}</h2>


                            <ul>
                                {cart.map((item) =>

                                    <li key={item.id}>
                                    </li>

                                )
                                }
                            </ul>

                        </div>

                    )
                        :
                        (<h2>Tu carrito está vacío.</h2>)}

                </div>
            </div>
        </>
    )
}

export default Cart;