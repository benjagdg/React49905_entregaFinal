import * as React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useGetCollection } from '../../hooks/useFirebase';
import CartWidget from './CartWidget';
import NavBarCategories from './NavBarCategories';
import NavBarMobileCategories from './NavBarMobileCategories';

const NavBar = () => {
  const { collectionData } = useGetCollection('categories');

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Abrir Menú</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/" >
                      <img
                        className="h-8 w-auto"
                        src={Logo}
                        alt="WabitStore"
                      />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {collectionData.length > 0 ? (
                      <NavBarCategories navigation={collectionData} />
                    ) : (
                      <span className={'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'} >Cargando información...</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {<CartWidget></CartWidget>}
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              { collectionData.length > 0 ? (
                  <NavBarMobileCategories navigation={collectionData} />
                ) : (
                  <span className={'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'} >Cargando información...</span>
                )
              }
            </div>
          </Disclosure.Panel>
          
        </>
      )}
    </Disclosure>
  );
}

export default NavBar