import { useState } from 'react'
import ItemCount from '../components/ItemCount'
import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


const ItemDetail = item => {

  const { title, description, img, price, stock } = item

  const [goToCart, setGoToCart] = useState(false)

  const { addItem } = useCartContext();

  const onAdd = (qty) => {
    setGoToCart(true);
    addItem(item, qty);
  }


  return (
    <>

      <section className='text-gray-700 body-font overflow-hidden'>

        <div className='container px-5 py-24 mx-auto'>

          <div className='lg:w-4/5 mx-auto flex flex-wrap'>

            <img className='lg:w-1/2 w-full object-cover object-center rounded-md' src={img} alt='product' />

            {/* Texto*/}

            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6  lg:mt-0'>

              <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
                {title}
              </h1>

              <p className='leading-relaxed mt-4'>
                {description}
              </p>

              <p className='title-font font-medium text-3xl text-gray-900 mt-4'>
                ${price}
              </p>


                <div>
                  {
                    goToCart
                      ?
                      <div className='mt-4'>
                        <Link to={'/categoria'}><button className='px-4 py-2 hover:bg-violet-100 text-center text-sm text-purple-500 rounded duration-300'>
                          Seguir comprando</button>
                        </Link>
                        <Link to={'/cart'}><button className='px-4 py-2 bg-purple-500 hover:bg-violet-700 disabled:opacity-75 text-center text-bold text-white rounded duration-300'>
                          Ver mi carrito</button>
                        </Link>
                      </div>

                      :
                      <ItemCount stock={stock} initial={0} onAdd={onAdd}/>
                  }
                </div>

              
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default ItemDetail