import styled from 'styled-components';

import DestinationsSlider from '../../components/sliders/DestinationsSlider';
import ImageSlider from '../../components/sliders/ImageSlider';
import ItemsSlider from '../../components/sliders/ItemsSlider';
import { destinationsData, servicesData, toursData } from '../../data/data';
import AboutUS from './AboutUs';
import Services from './Services';

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
      <DestinationsSlider
        title="Popular Destinations"
        description={
          'Most popular destinations around the world, from historical places to natural wonders.'
        }
        data={destinationsData}
      />
      <Services
        data={servicesData}
        title="Let’s Enjoy Your Vacation with us"
        description={'Elevate your travel experience with our premium services'}
      />
    </MainContainer>
  );
};

const Div = styled.div`
  width: 100%;
  position: relative;
`;

export default HomePage;
