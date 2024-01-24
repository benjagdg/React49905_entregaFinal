import { useParams } from 'react-router-dom';
import { useGetCategoryFilter } from '../hooks/useFirebase';
import ItemListContainer from '../components/ItemListContainer';
import { setSiteTitle } from '../hooks/setSiteTitle';

const Category = () => {
  const { category } = useParams();
  const { collectionFilter } = useGetCategoryFilter('products', category);
  setSiteTitle(`${category} - Wabit Store`);
  
  return (
    <div>
      <ItemListContainer productsData={collectionFilter} title={`Categoría ${category}`}></ItemListContainer>
    </div>
  )
}
export default Category
