import { styled } from 'styled-components';

import Cards from './Cards';
import Filter from './Filter';

import Languages from 'components/Languages';
import Footer from 'components/reusable/Footer';
import Header from 'components/reusable/Header';
import MainContainer from 'components/reusable/MainContainer';

function ToursPage() {
  return (
    <MainContainer>
      <Languages />
      <Div>
        <Header backgroundColor="#346172" page={'/Tours'} />
        <Filter />
      </Div>
      <Cards />
      <Footer />
    </MainContainer>
  );
}
const Div = styled.div`
  width: 100%;
  position: relative;
`;
export default ToursPage;
