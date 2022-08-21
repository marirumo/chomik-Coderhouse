import {useCartContext} from '../context/CartContext'

const Cart = () => {
    
    const { cart } = useCartContext()

    return (
        <div>
            <div >
            {cart.length ? (
                
                <div>
                    <h2>Tu carrito</h2>
                    <div >
                        <h3>Item</h3>
                        <h3>Cantidad</h3>
                        <h3>Stock</h3>
                    </div>

                    <ul>
                        {cart.map((item) => 
                            <li>
                                <div>
                                
                                    <span><img src={item.img} alt='item' /></span>
                                    <span>{item.title}</span>
                                </div>
                                <div>{item.price}</div>
                                <div>{item.stock}</div>
                            </li>
                            )
                        }
                    </ul>
                    
                </div>
                ) : (<h2>Tu carrito está vacío.</h2>)}
                
            </div>
        </div>
    )
}

export default Cart;