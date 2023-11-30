import { styled } from 'styled-components';

import Resort from '../../assets/images/Resort.png';
import Info from '../../components/reusable/info';
import ImageSlider from '../../components/sliders/ImageSlider';
import { healthBannerData } from '../../data/data';
import Packages from './Packages';

import Languages from 'components/Languages';
import Footer from 'components/reusable/Footer';
import Header from 'components/reusable/Header';
import MainContainer from 'components/reusable/MainContainer';

const HealthPage = () => {
  return (
    <MainContainer>
      <Languages />
      <Div>
        <ImageSlider data={healthBannerData} />
        <Header backgroundColor="#346172" page={'/Health'} />
      </Div>
      <Info
        image={Resort}
        header={'Health Programs'}
        title={'Discover Wellness in Georgia: Explore Our Healing Retreats'}
        description={
          'Borjomi, Tskhaltubo, and Sairme are internationally acclaimed Georgian health resorts that have garnered global recognition for their exceptional mineral waters and comprehensive wellness programs. These resorts have established themselves as premier destinations for individuals in pursuit of relaxation, rejuvenation, and therapeutic benefits, drawing visitors from all corners of the world.'
        }
      />
      <Packages />
      <Footer />
    </MainContainer>
  );
};
const Div = styled.div`
  width: 100%;
  position: relative;
`;
export default HealthPage;
