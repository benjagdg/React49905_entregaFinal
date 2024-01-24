import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../context/CartContext"
import { Toaster, toast } from 'sonner'

const CartListComponent = ({ productsData }) => {
  const [cartTotal, setCartTotal] = useState(0);
  const { itemsCart, setItemsCart } = useContext(CartContext);

  const handleRemoveCartItem = (productId) => {
    const updatedCart = itemsCart.filter((item) => item.id !== productId);
    setItemsCart(updatedCart);
    toast.info('Se ha eliminado el item del carrito...')
  };

  const handleEmptyCart = () => {
    setItemsCart([]); // Vaciar el carrito al cargar la nueva ruta "checkout"
  };

  useEffect(() => {
    const total = productsData.reduce((actual, product) => {
      return actual + (product.quantity * product.price);
    }, 0);
    setCartTotal(total);
  }, [productsData]);

  return (
    <div className="m-5 p-5">
      <Toaster richColors position="top-center"/>
      <h2 className="text-2xl font-medium pb-4 text-gray-900">Detalle de Compra</h2>
      <ul role="list" className="border p-4 divide-y divide-gray-100">
        { productsData.map((product) => (
          <li key={product.id} className="flex justify-between gap-x-6 py-1">
            <div className="flex min-w-0 gap-x-4">
              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{product.title}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{product.description}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <button onClick={() => handleRemoveCartItem(product.uid)} className="font-medium text-indigo-400 hover:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
                </svg>
              </button>
              <p className="text-sm leading-6 text-gray-900">${product.price.toLocaleString('es-CL')}</p>
              <div className="mt-1 flex items-center gap-x-1.5">
                <p className="text-xs leading-5 text-gray-500">Cantidad: {product.quantity}</p>
              </div>
            </div>
          </li>
        )) }
      </ul>
      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Total a pagar</p>
          <p>${cartTotal.toLocaleString('es-CL')}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">Los costos de envíos no están incluidos en la compra</p>
        <div className="mt-6">
          <Link to="/checkout" onClick={handleEmptyCart} className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
            Procesar Compra
          </Link>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            o{' '}
            <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
              Continuar comprando
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
export default CartListComponent
