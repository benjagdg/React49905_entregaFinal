import { Link } from "react-router-dom";

const NavBarCategories = ( {navigation} ) => {
  return (
    navigation.map((item) => {
      return (
        <Link 
          key={item.name}
          to={`/products/${item.name}`}
          className={'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'}
        >
          {item.name}
        </Link>
      )
    })
  )
}

export default NavBarCategories