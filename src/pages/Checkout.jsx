import { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import firestoreDB from '../services/config'


const Checkout = () => {

  const { getTotalPrice, getTotalCart, shipping, total, cart, clear } = useCartContext()

  //Form
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [id, setID] = useState()

  const createOrder = () => {

    const order = {
      buyer: { name: fullName, email: email },
      items: cart,
      date: Timestamp.fromDate(new Date())
    }


    const collectionPurchase = collection(firestoreDB, 'orders')

    addDoc(collectionPurchase, order)
      .then(({ id }) => setID(id))
      .then(() => clear())
  }


  return (
    <>

      <div className='bg-violet-200 flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44'>
        <div className='flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10  2xl:space-x-36 space-y-12 lg:space-y-0'>
          <div className='flex w-full flex-col justify-start items-start'>

            <p className='text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 '>Check out</p>

            <div className='mt-2'>
              <Link to={'/cart'}><button className='px-4 py-2 hover:bg-violet-00 text-center text-sm text-purple-500 rounded duration-300'>
                Volver a carrito</button></Link>
            </div>

            <div className='mt-12'>
              <p className='text-lg leading-4 text-gray-600 pb-4'>
                Ingresa tus datos para finalizar tu compra</p>
            </div>

            <div className='flex flex-col w-full'>
              
              <form className='space-y-10' onSubmit={handleSubmit(() => createOrder())}>
                
                <input {...register('fullName', {
                required: {
                  value: true,
                  message: 'Este campo es requerido'
                }
                })} onChange={(e) => setFullName(e.target.value)} id='fullName' name='fullName' type='text' placeholder='nombre' className='focus:ring-2 focus:ring-gray-500 focus:outline-none px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full'/>
                {errors.fullName && 
                <span>{errors.fullName.message}</span>}
              
              
                <input  {...register('email', {
                required: {
                  value: true,
                  message: 'Este campo es requerido'
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'El email no es valido'
                }
                })}
                onChange={(e) => setEmail(e.target.value)} id='email' name='email' type='text' placeholder='mail@mail.com' className='focus:ring-2 focus:ring-gray-500 focus:outline-none px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full' />
                {errors.email && 
                <span>{errors.email.message}</span>}


                {!id &&
                <input type='submit' className='px-4 py-2 bg-purple-500 hover:bg-violet-700 text-center text-sm text-white rounded duration-300' />
                }
                {id &&
                <>
                  <h3> Se generó un número de compra: {id} </h3>
  
                  <Link to={'/categoria'}><button className='px-4 py-2 mt-7 bg-purple-500 hover:bg-violet-700 text-center text-sm text-white rounded duration-300'>Volver a comprar</button></Link>
                </>
              }
            </form>

            </div>
            
            
          </div>

          <div className='flex flex-col justify-start items-start w-full md:p-8 bg-purple-100 rounded overflow-visible'>
            <div>
              <h3 className='text-1xl font-semibold leading-6 text-gray-800 '>Resumen de compra</h3>
            </div>

            <div className='flex mt-7 flex-col items-end w-full space-y-6'>
              <div className='flex justify-between w-full items-center'>
                <p className='text-lg leading-4 text-gray-600'>Total productos</p>
                <p className='text-lg font-semibold leading-4 text-gray-600'>{getTotalCart()}</p>
              </div>

              <div className='flex justify-between w-full items-center'>
                <p className='text-lg leading-4 text-gray-600'>Envío</p>
                <p className='text-lg font-semibold leading-4 text-gray-600'>${shipping()}</p>
              </div>
              <div className='flex justify-between w-full items-center'>
                <p className='text-lg leading-4 text-gray-600'>Sub total</p>
                <p className='text-lg font-semibold leading-4 text-gray-600'>${getTotalPrice()}</p>
              </div>
            </div>
            <div className='flex justify-between w-full items-center mt-24'>
              <p className='text-xl font-semibold leading-4 text-gray-800'>Total</p>
              <p className='text-lg font-semibold leading-4 text-gray-800'>${total()}</p>
            </div>

          </div>


        </div>
      </div>



    </>
  )
}

export default Checkout