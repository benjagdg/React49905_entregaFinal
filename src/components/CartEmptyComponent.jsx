import { Link } from "react-router-dom"
export default function CartEmptyComponent() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 lg:px-8">
        <div className="mx-auto text-center isolate overflow-hidden bg-gray-900 shadow-2xl rounded-3xl flex gap-x-20 px-24 py-16">
          <div className="mx-auto max-w-md lg:py-32">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              Su carrito se encuentra vacío
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Vuelva a la tienda y agregue productos a su carro para continuar con su compra...
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                Ir al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}