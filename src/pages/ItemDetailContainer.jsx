import { useParams } from 'react-router-dom';
import { useGetProductById } from '../hooks/useFirebase';
import { setSiteTitle } from '../hooks/setSiteTitle';
import ItemDetailComponent from '../components/ItemDetailComponent';

const ItemDetailContainer = () => {
  setSiteTitle(`Ficha Producto - Wabit Store`);
  const { productId } = useParams();
  const { productData } = useGetProductById('products', productId);

  return (
    <div className="bg-white">
      { productData.length == 0 ? (
          <span className={'text-black-300 rounded-md px-3 py-2 text-xl font-large'} >Cargando información...</span>
        ) : (
          <ItemDetailComponent proData={productData} ></ItemDetailComponent>
        )
      }
    </div>
  )
}
export default ItemDetailContainer