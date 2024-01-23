import { Disclosure } from '@headlessui/react';

const NavBarMobileCategories = ( {navigation} ) => {
  return (
    navigation.map((item) => {
      return (
        <Disclosure.Button
          key={item.name}
          as="a"
          href={item.id}
          className={'text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'}
        >
          {item.name}
        </Disclosure.Button>
      )
    })
  )
}

export default NavBarMobileCategories