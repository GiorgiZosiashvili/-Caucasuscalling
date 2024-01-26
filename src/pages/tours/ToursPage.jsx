import { styled } from 'styled-components';

import Seasons from '../../assets/images/Seasons.png';
import Cards from './Cards';

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
        <Image src={Seasons} />
      </Div>
      <Cards />
      <Footer />
    </MainContainer>
  );
}
const Div = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: center;
  margin-bottom: 20px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 430px;
`;
export default ToursPage;
