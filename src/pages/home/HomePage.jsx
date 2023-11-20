import styled from 'styled-components';

import Footer from '../../components/reusable/Footer';
import DestinationsSlider from '../../components/sliders/DestinationsSlider';
import ImageSlider from '../../components/sliders/ImageSlider';
import InformationSlider from '../../components/sliders/InformationSlider';
import ToursSlider from '../../components/sliders/ToursSlider';
import {
  destinationsData,
  homeBannerData,
  infoData,
  servicesData,
  toursData,
} from '../../data/data';
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
        <ImageSlider data={homeBannerData} />
        <Header page="/" />
      </Div>
      <AboutUS />
      <ToursSlider
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
      <InformationSlider
        data={infoData}
        title="Comprehensive Travel Planning Information"
        description={
          'Most popular destinations around the world, from historical places to natural wonders.'
        }
      />
      <Footer />
    </MainContainer>
  );
};

const Div = styled.div`
  width: 100%;
  position: relative;
`;

export default HomePage;
