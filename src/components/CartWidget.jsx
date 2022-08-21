
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../context/CartContext'

const CartWidget = () => {
  
  const {getTotalCart} =useCartContext()

  return (

    <div>
      <FontAwesomeIcon icon={faShoppingBag} className='text-orange-900 hover:bg-orange-400 hover:text-white px-3 py-3 rounded-lg text-md font-medium' />
      <span>{getTotalCart() || ""}</span>    
    </div>
    
  );
}

export default CartWidget