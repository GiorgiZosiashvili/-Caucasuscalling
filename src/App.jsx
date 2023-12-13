import { styled } from 'styled-components';

import AppRouter from './router/Router';

function App() {
  return (
    <Container>
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

export default App;
