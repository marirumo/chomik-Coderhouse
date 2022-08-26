import { useCartContext } from '../context/CartContext'

const ItemCart = ({item}) => {

    const { removeItems } = useCartContext()

  return (
    <>
    <div className='flex items-center mx-2 px-6 py-5 bg-slate-50 hover:bg-slate-100'>
          <div className='flex w-2/5'> 
            <div className='w-20'>
              <img className='h-24' src={item.img} alt=''/>
            </div>
            <div className='flex flex-col justify-start ml-10'>
              <span className='font-bold text-sm'>{item.title}</span>
              <button onClick={()=> removeItems(item.id)} className='font-semibold hover:text-red-500 text-red-600 text-xs'>Eliminar</button>
            </div>
          </div>
          <span className='text-center w-1/5 font-semibold text-sm'>x{item.qty}</span>
          <span className='text-center w-1/5 font-semibold text-sm'>${item.price}</span>
          <span className='text-center w-1/5 font-semibold text-sm'>${item.price * item.qty} </span>
          
    </div>
    </>
  )
}

export default ItemCart