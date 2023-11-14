import { styled } from 'styled-components';

import { Logo } from './components/SVG/Svgs';
import AppRouter from './router/Router';

function App() {
  return (
    <Container>
      <MainLogo />
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
const MainLogo = styled(Logo)`
  position: absolute;
  z-index: 100;
  top: 5px;
  left: 22px;
`;

export default App;
