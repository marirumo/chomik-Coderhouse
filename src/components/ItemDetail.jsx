import { useState } from 'react'
import ItemCount from './ItemCount'
import {useCartContext} from '../context/CartContext'
import { Link } from 'react-router-dom'


const ItemDetail = item => {

  const { title, description, img, price, stock } = item
  
  const [goToCart, setGoToCart] = useState(false)

  const {addItem} = useCartContext();

  const onAdd = (count) => {
    setGoToCart(true);
    addItem(item,count);
  }


  return (
    <>

      <section className='text-gray-700 body-font overflow-hidden bg-white'>

        <div className='container px-5 py-24 mx-auto'>

          <div className='lg:w-4/5 mx-auto flex flex-wrap'>

            <img className='lg:w-1/2 w-full object-cover object-center rounded-md' src={img} alt='product' />

            {/* Texto*/}

            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>

              <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
                {title}
              </h1>

              <p className='leading-relaxed'>
                {description}
              </p>

              <div className='flex'>

                <span className='title-font font-medium text-2xl text-gray-900'>
                  ${price}
                </span>

              </div>

              <div>

                <span className='text-sm text-gray-500 dark:text-gray-400'>

                  Stock disponible: {stock}

                </span>

                <div>
                  {
                    goToCart
                      ?
                      <div className='py-8'>
                        <Link to={'/'}><button className='px-4 py-2 hover:bg-violet-100 text-center text-sm text-purple-500 rounded duration-300'>
                          Seguir comprando</button>
                        </Link>
                        <Link to={'/cart'}><button className='px-4 py-2 m-2 bg-purple-500 hover:bg-violet-700 text-center text-sm text-white rounded duration-300'>
                          Ver mi carrito</button>
                        </Link>
                      </div>

                      :
                      <ItemCount stock={stock} initial={0} onAdd={onAdd} />
                  }
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default ItemDetail