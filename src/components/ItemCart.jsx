import { useCartContext } from '../context/CartContext'

const ItemCart = ({item}) => {

    const { removeItem } = useCartContext()

  return (
    <>
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex w-2/5"> 
            <div className="w-20">
              <img className="h-24" src={item.img} alt=""/>
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">{item.title}</span>
              <button onClick={()=> removeItem(item.id)} className="font-semibold hover:text-red-500 text-gray-700 text-xs">Eliminar</button>
              
            </div>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">{item.qty}</span>
          <span className="text-center w-1/5 font-semibold text-sm">${item.price}</span>
          <span className="text-center w-1/5 font-semibold text-sm">${item.price * item.qty} </span>
          
          
        </div>
    </>
  )
}


export default ItemCart