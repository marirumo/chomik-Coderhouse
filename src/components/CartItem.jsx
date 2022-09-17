import { useCartContext } from '../context/CartContext'


const CartItem = ({ item }) => {

  const { removeItems} = useCartContext()


  return (
    <>
      <div className='flex py-5 hover:bg-slate-200'>
        
        <div className='flex w-2/5'>

          <img width="60" src={item.img} alt='' />

          <div className="flex flex-col ml-3">
            <span className="md:text-md font-medium">{item.title}</span>
            <span className="text-xs font-light text-red-600"><button onClick={() => removeItems(item.id)}>Eliminar</button></span>
          </div>

        </div>

        <span className='text-center w-1/5 font-semibold text-sm'>{item.qty}</span>
        <span className='text-center w-1/5 font-semibold text-sm'>${item.price}</span>
        <span className='text-center w-1/5 font-semibold text-sm'>${item.price * item.qty} </span>

      </div>

    </>
  )
}

export default CartItem