import { styled } from 'styled-components';

import Header from '../../components/reusable/Header';
import MainContainer from '../../components/reusable/MainContainer';

const HealthPage = () => {
  return (
    <MainContainer>
      <Header page={'/Health'} />
    </MainContainer>
  );
};

export default HealthPage;
