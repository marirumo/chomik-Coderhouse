import { Link } from 'react-router-dom'

export const Hero = () => {
    return (
        <>
            <section className='bg-white'>
                <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
                    <div className='mr-auto place-self-center lg:col-span-7'>
                        <h1 className='max-w-2xl mb-4 text-4xl font-extrabold md:text-5xl xl:text-6xl text-gray-900'>Chomik</h1>
                        <p className='max-w-2xl mb-6 font-light text-slate-900 lg:mb-8 md:text-lg lg:text-xl'>Accesorios para hamster hechos a mano</p>
                        <Link to={'/categoria'}><button className='px-4 py-2 m-2 bg-purple-500 hover:bg-violet-700 text-center text-sm text-white rounded duration-300'>
                          Ver tienda</button>
                        </Link>
                      
                    </div>
                    <div className='hidden lg:mt-0 lg:col-span-5 lg:flex'>
                        <img src='https://images.unsplash.com/photo-1610968754252-56abb05eb438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='hamster'/>
                    </div>
                </div>
            </section>
        </>
    )
}
