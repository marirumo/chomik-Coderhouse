import {useCartContext} from '../context/CartContext'

const Cart = () => {
    
    const { cart, getTotalCart } = useCartContext()

    return (
        <div>
            <div >
            {cart.length ? (
                
                <div>
                    <h2>Tu carrito</h2>
                   

                    <ul>
                        {cart.map((item) => 
                            <li key={item.id}>
                                
                                    <span> <img src={item.img} alt='item' /></span>
                                    <span>{item.title}</span>
                                    <span>Precio ${item.price}</span>
                                
                            </li>
                            )
                        }
                    </ul>

                    <div>Total de items {getTotalCart()}</div>
                    
                </div>
                ) : (<h2>Tu carrito está vacío.</h2>)}
                
            </div>
        </div>
    )
}

export default Cart;