import CartWidget from './CartWidget';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom'


const NavBar = () => {

  return (

    <>
      <nav className="bg-orange-300">

        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">

            {/* responsive */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

              <button className="dropdown-relative inline-flex items-center justify-center p-2 rounded-md text-slate-900 hover:text-white hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" >
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Link to='/'><img className="block h-8 w-auto" src={logo} alt="logo-chomik" /></Link>
              </div>
              <div className="hidden sm:block sm:ml-9">
                <div className="flex space-x-4">

                  <Link to='/' className="text-slate-900 hover:bg-orange-400 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">Home</Link>

                  <Link to='/categoria/escondite' className="text-slate-900 hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Escondite</Link>

                  <Link to='/categoria/jaulas' className="text-slate-900 hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Jaulas</Link>

                  <Link to='/categoria/ruedas' className="text-slate-900 hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Ruedas</Link>

                  <Link to='/categoria/ambientacion' className="text-slate-900 hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Ambientación</Link>

                  <Link to='/categoria/accesorios' className="text-slate-900 hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Accesorios</Link>
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <CartWidget />
            </div>
          </div>
        </div>



        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">

            <Link to='/' className="text-slate-900 hover:bg-orange-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>

            <Link to='/categoria/:categoryId' className="text-slate-900 hover:bg-orange-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Escondite</Link>

            <Link to='/categoria/:categoryId' className="text-slate-900 hover:bg-orange-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Jaulas</Link>

            <Link to='/categoria/:categoryId' className="text-slate-900 hover:bg-orange-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Ruedas</Link>

            <Link to='/categoria/:categoryId' className="text-slate-900 hover:bg-orange-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Ambientación</Link>

            <Link to='/categoria/:categoryId' className="text-slate-900 hover:bg-orange-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Accesorios</Link>
          </div>
        </div>
      </nav>

    </>);
}

export default NavBar