import { styled } from 'styled-components';

import { WhatsApp } from './components/SVG/Svgs';
import AppRouter from './router/Router';

function App() {
  return (
    <Container>
      <AppRouter />
      <IconCont
        target="_blank"
        href={
          'https://api.whatsapp.com/send/?phone=%2B995574820102&text&type=phone_number&app_absent=0'
        }>
        <Icon />
      </IconCont>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: relative;
  max-width: 1550px;
`;
const IconCont = styled.a`
  display: flex;
  position: fixed;
  z-index: 10;
  bottom: 28px;
  right: 36px;
  @media screen and (max-width: 885px) {
    bottom: 18px;
    right: 10px;
  }
`;
const Icon = styled(WhatsApp)``;
export default App;
