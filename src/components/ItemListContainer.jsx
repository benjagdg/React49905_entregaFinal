import ItemCard from "./ItemCard";

const ItemListContainer = ({ productsData, title='Nuestros productos' }) => {
  
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-700">{title}</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productsData.length > 0 ? (
            productsData[0] == 'nodata' ? (
              <span className={'text-black-300 rounded-md px-3 py-2 text-lg font-large'} >No hay productos...</span>
            ) : (
              <ItemCard itemData={productsData}></ItemCard>
            )
          ) : (
            <span className={'text-black-300 rounded-md px-3 py-2 text-lg font-large'} >Cargando productos...</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer