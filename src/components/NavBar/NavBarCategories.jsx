const NavBarCategories = ( {navigation} ) => {
  return (
    navigation.map((item) => {
      return (
        <a
          key={item.name}
          href={item.id}
          className={'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'}
        >
          {item.name}
        </a>
      )
    })
  )
}

export default NavBarCategories