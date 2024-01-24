import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const CartWidget = () => {
  const { itemsCart } = useContext(CartContext)
  const totalItemsCart = itemsCart.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="ml-4 flow-root lg:ml-6">
      <Link to="cart" className="group -m-2 flex items-center p-2">
        <ShoppingCartIcon
          className="h-6 w-6 flex-shrink-0 text-white group-hover:text-gray"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-white group-hover:text-gray">
          <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            {totalItemsCart}
          </span>
        </span>
        <span className="sr-only">Productos en el carro</span>
      </Link>
    </div>
  )
}
export default CartWidget
