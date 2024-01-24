import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = ( {itemData} ) => {
  
  return (
    itemData.map((product) => (
      <div key={product.id} className="group relative border rounded">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 p-4 text-center">
          <div className="w-full">
            <h3 className="text-sm text-gray-700">
              <Link to={`/product/${product.id}`}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.title}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.description}</p>
          </div>
          <p className="text-md font-medium text-gray-900">${product.price.toLocaleString('es-CL')}</p>
          <Link to={`/product/${product.id}`}
            type="button"
            className="mt-6 px-4 py-2 items-center rounded-md border border-transparent bg-indigo-600 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
            Ver Producto
          </Link>
        </div>
      </div>
    ))
  )
}

export default ItemCard