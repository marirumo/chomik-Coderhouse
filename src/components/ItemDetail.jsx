import ItemCount from './ItemCount'

const ItemDetail = item => {

  const { title, description, img, price, stock } = item

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


                <ItemCount stock={stock} initial={1} />
              </div>

            </div>

          </div>


        </div>

      </section>

    </>
  )
}

export default ItemDetail