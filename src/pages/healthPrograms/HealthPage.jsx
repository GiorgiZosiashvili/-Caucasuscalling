import { styled } from 'styled-components';

import ImageSlider from '../../components/sliders/ImageSlider';
import { healthBannerData } from '../../data/data';

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
        <Header page={'/Health'} />
      </Div>
      <Footer />
    </MainContainer>
  );
};
const Div = styled.div`
  width: 100%;
  position: relative;
`;
export default HealthPage;
