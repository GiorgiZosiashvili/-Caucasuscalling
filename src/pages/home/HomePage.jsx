import styled from 'styled-components';

import Person from '../../assets/images/person.png';
import {
  destinationsData,
  details,
  homeBannerData,
  infoData,
  servicesData,
  tourPackagesData,
} from '../../data/data';
import Services from './Services';

import Languages from 'components/Languages';
import Footer from 'components/reusable/Footer';
import Header from 'components/reusable/Header';
import Info from 'components/reusable/Info';
import MainContainer from 'components/reusable/MainContainer';
import DestinationsSlider from 'components/sliders/homeDestinationsSlider';
import ImageSlider from 'components/sliders/ImageSlider';
import InformationSlider from 'components/sliders/InformationSlider';
import ToursSlider from 'components/sliders/ToursSlider';

const HomePage = () => {
  return (
    <MainContainer>
      <Languages />
      <Div>
        <ImageSlider data={homeBannerData} />
        <Header backgroundColor="#346172" page="/" />
      </Div>
      <Info
        page="/"
        image={Person}
        details={details}
        header={'WELCOME TO OUR WEBSITE!'}
        title={'We are the best company for your visit'}
        description={
          "Step into our Georgian escape! With 15+ years of expertise, we're your gateway to the heart of Georgian culture. Our guided experiences unveil the richness of traditions, accompanied by culinary delights. Partners, let's co-create remarkable journeys. Solo adventurers, anticipate personalised trips infused with the authentic spirit of Georgia. Begin your immersive travel story with us, where every moment reflects the unique tapestry of Georgian culture."
        }
      />
      <ToursSlider
        title="Explore Our Tours"
        data={tourPackagesData}
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
