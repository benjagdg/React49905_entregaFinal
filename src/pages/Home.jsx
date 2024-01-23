import ItemListContainer from '../components/ItemListContainer';
import HomeBanner from '../components/HomeBanner';
import { setSiteTitle } from '../hooks/setSiteTitle';

const Home = () => {
  setSiteTitle('Inicio - Wabit Store');
  return (
    <div>
      <HomeBanner></HomeBanner>
      <ItemListContainer></ItemListContainer>
    </div>
  )
}

export default Home