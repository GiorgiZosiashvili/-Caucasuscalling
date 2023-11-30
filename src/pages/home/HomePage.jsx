import styled from 'styled-components';

import Person from '../../assets/images/person.png';
import Footer from '../../components/reusable/Footer';
import Info from '../../components/reusable/info';
import DestinationsSlider from '../../components/sliders/DestinationsSlider';
import ImageSlider from '../../components/sliders/ImageSlider';
import InformationSlider from '../../components/sliders/InformationSlider';
import ToursSlider from '../../components/sliders/ToursSlider';
import {
  details,
  homeBannerData,
  HomeDestinationsData,
  infoData,
  servicesData,
  toursData,
} from '../../data/data';
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
        <Header backgroundColor="#346172" page="/" />
      </Div>
      <Info
        image={Person}
        details={details}
        header={'WELCOME TO OUR WEBSITE!'}
        title={'We are the best company for your visit'}
        description={
          'Our passion is to curate unforgettable journeys, tailored to your preferences and desires. Whether you dream of uncovering ancient history, savoring culinary delights, or relishing the great outdoors, we have the perfect adventure in store for you.Our team of expert guides, drivers, and travel enthusiasts are at your service, ready to unveil the hidden gems of Georgia. We offer thoughtfully designed packages that'
        }
      />
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
        data={HomeDestinationsData}
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
