import { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import { Timestamp, addDoc, collection} from 'firebase/firestore'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import firestoreDB from '../services/config'


const Checkout = () => {

  const { getTotalPrice, cart, clear } = useCartContext()

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
    <div >
      <h1>Tu compra por {getTotalPrice()}</h1>
      
            <form onSubmit={handleSubmit(() => createOrder())} >
              <legend>Por favor completa los datos</legend>

              <input {...register('fullName', {
                required: {
                  value: true,
                  message: 'Este campo es requerido'
                }
              })} onChange={(e) => setFullName(e.target.value)} id='fullName' name='fullName' type='text' placeholder='name'/>
              {errors.fullName && <span>{errors.fullName.message}</span>}
              
              
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
                onChange={(e) => setEmail(e.target.value)} id='email' name='email' type='text' placeholder='mail@mail.com' />
              {errors.email && <span c>{errors.email.message}</span>}


              {!id &&
                <input type='submit' className='px-4 py-2 bg-purple-500 hover:bg-violet-700 text-center text-sm text-white rounded duration-300' />
              }
              {id &&
                <>
                  <h3> Se generó un número de compra: {id} </h3>
  
                  <Link to='/'><button className='px-4 py-2 bg-purple-500 hover:bg-violet-700 text-center text-sm text-white rounded duration-300'>Volver a comprar</button></Link>
                </>
              }
            </form>
          </div>
       
  )
}

export default Checkout