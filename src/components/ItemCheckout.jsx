

const ItemCheckout = ({item}) => {


  return (
    <>
    <div className='flex items-center mx-2 px-6 py-5'>
         
          <span className='mt-7 flex flex-1 text-gray-800 text-lg font-normal'>{item.title}</span>
          <span className='flex-auto text-right pr-4 md:pr-5 lg:pr-4'>${item.price} x{item.qty}</span>
          
    </div>
    </>
  )
}

export default ItemCheckout