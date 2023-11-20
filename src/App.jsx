import { styled } from 'styled-components';

import { Logo } from './components/SVG/Svgs';
import AppRouter from './router/Router';

function App() {
  return (
    <Container>
      <LogoContainer>
        <MainLogo />
      </LogoContainer>
      <AppRouter />
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
`;
const LogoContainer = styled.div`
  position: absolute;
  z-index: 100;
  top: 5px;
  left: 22px;
  width: 236px;
  height: 103px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MainLogo = styled(Logo)``;

export default App;
