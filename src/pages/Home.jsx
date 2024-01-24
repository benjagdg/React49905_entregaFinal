import ItemListContainer from '../components/ItemListContainer';
import HomeBanner from '../components/HomeBanner';
import { setSiteTitle } from '../hooks/setSiteTitle';
import { useGetCollection } from '../hooks/useFirebase';

const Home = () => {
  setSiteTitle('Inicio - Wabit Store');

  const { collectionData } = useGetCollection('products');

  return (
    <div>
      <HomeBanner></HomeBanner>
      <ItemListContainer productsData={collectionData}></ItemListContainer>
    </div>
  )
}

export default Home