import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Toaster, toast } from 'sonner'

const ItemAddCartComponent = ({productUid}) => {
  const [countItem, setCountItem] = useState(1);
  const { itemsCart, setItemsCart } = useContext(CartContext);

  const handleAddItem = () => {
    setCountItem(countItem + 1);
  };

  const handleRemoveItem = () => {
    if(countItem > 1){
      setCountItem(countItem - 1);
    }
  };

  const handleAddItemToCart = () => {
    const productExists = itemsCart.find((item) => item.id === productUid);

    if (productExists) {
      setItemsCart(
        itemsCart.map((item) =>
          item.id === productUid ? 
          { ...item, quantity: item.quantity + countItem }
          : item
        )
      );
    } else {
      setItemsCart([...itemsCart, { id: productUid, quantity: countItem }]);
    }
    toast.success('Producto añadido al carrito');
    setCountItem(1);
  };
  
  return (
    <div>
      <Toaster richColors position="top-center"/>
      <div className="flex items-center align-center mx-auto border-t border-gray-200 bg-white px-3 py-3 sm:px-3">
        <div className="items-center">
          <div className="inline-flex rounded-md shadow-sm">
            <div className="relative z-10 inline-flex items-center bg-indigo-600 px-6 py-3 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              {countItem}
            </div>

            <button onClick={handleRemoveItem} className="relative inline-flex items-center px-3 py-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
              </svg>
            </button>

            <button onClick={handleAddItem} className="relative hidden items-center px-4 py-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <button onClick={handleAddItemToCart} className="mt-2 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Agregar al Carrito
      </button>
      
    </div>
  )
}

export default ItemAddCartComponent