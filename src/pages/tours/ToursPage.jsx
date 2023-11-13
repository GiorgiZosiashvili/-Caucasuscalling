import { styled } from 'styled-components';

import Header from '../../components/reusable/Header';
import MainContainer from '../../components/reusable/MainContainer';

function ToursPage() {
  return (
    <MainContainer>
      <Header page={'/Tours'} />
    </MainContainer>
  );
}

export default ToursPage;
