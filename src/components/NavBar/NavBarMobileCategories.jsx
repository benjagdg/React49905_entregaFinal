import { Disclosure } from '@headlessui/react';
import { Link } from 'react-router-dom';

const NavBarMobileCategories = ( {navigation} ) => {
  return (
    navigation.map((item) => {
      return (
        <Link
          to={`/products/${item.name}`}
          >
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.id}
            className={'text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'}
          >
            {item.name}
          </Disclosure.Button>
        </Link>
      )
    })
  )
}

export default NavBarMobileCategories