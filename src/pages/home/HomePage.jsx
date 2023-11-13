import styled from 'styled-components';

import ImageSlider from '../../components/ImageSlider';
import ItemsSlider from '../../components/ItemsSlider';
import { toursData } from '../../data/data';
import AboutUS from './AboutUs';

import Languages from 'components/Languages';
import Header from 'components/reusable/Header';
import MainContainer from 'components/reusable/MainContainer';

const HomePage = () => {
  return (
    <MainContainer>
      <Languages />
      <Div>
        <ImageSlider />
        <Header page="/" />
      </Div>
      <AboutUS />
      <ItemsSlider
        title="Explore Our Tours"
        data={toursData}
        description={
          'Most popular destinations around the world, from historical places to natural wonders.'
        }
      />
    </MainContainer>
  );
};

const Div = styled.div`
  width: 100%;
  position: relative;
`;

export default HomePage;
