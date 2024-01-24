import { Link } from "react-router-dom"
import ItemAddCartComponent from "./ItemAddCartComponent";

const ItemDetailComponent = ({ proData }) => {
  return (
    <div className="pt-6">
      <nav aria-label="Breadcrumb">
        <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <li>
            <div className="flex items-center">
              <Link to="/" className="mr-2 text-sm font-medium text-gray-900">
                Inicio
              </Link>
              <svg
                width={16}
                height={20}
                viewBox="0 0 16 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <Link to={`/products/${proData.category}`} className="mr-2 text-sm font-medium text-gray-900">
                {proData.category}
              </Link>
              <svg
                width={16}
                height={20}
                viewBox="0 0 16 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li className="text-sm">
            <Link to={`/product/${proData.id}`} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
              {proData.title}
            </Link>
          </li>
        </ol>
      </nav>

      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg lg:block">
          <img
            src={proData.images[0]}
            alt={proData.title}
            className="p-3 object-cover object-center"
          />
        </div>
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              src={proData.images[1]}
              alt={proData.title}
              className="p-3 object-cover object-center"
            />
          </div>
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              src={proData.images[2]}
              alt={proData.title}
              className="p-3 object-cover object-center"
            />
          </div>
        </div>
        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
          <div>
            <div className="lg:col-span-2 lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{proData.title}</h1>
              <div>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">{proData.description}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 lg:row-span-3 lg:mt-2">
              <p className="text-3xl tracking-tight text-gray-900">${proData.price.toLocaleString('es-CL')}</p>
            </div>
           
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              <ItemAddCartComponent productUid={proData.uid}></ItemAddCartComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ItemDetailComponent