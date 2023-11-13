import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

function Header({ page }) {
  const [currentPage, setCurrentPage] = useState('Home');
  const pages = [
    {
      name: 'Home',
      page: '/',
    },
    {
      name: 'Destination',
      page: '/Destination',
    },
    {
      name: 'Tours',
      page: '/Tours',
    },
    {
      name: 'Health',
      page: '/Health',
    },
    {
      name: 'Partnership',
      page: '/Partnership',
    },
  ];
  useEffect(() => {
    setCurrentPage(page);
  }, [page]);
  return (
    <Container>
      <NavigationContainer>
        {pages.map((navigation, i) => {
          const isSelected = currentPage === navigation.page;
          return (
            <LinkContainer style={{ textDecoration: 'none' }} key={i} to={navigation.page}>
              <Title selected={isSelected}>{navigation.name}</Title>
            </LinkContainer>
          );
        })}
      </NavigationContainer>
    </Container>
  );
}
const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.15);
  text-decoration: none;
  z-index: 10;
  position: absolute;
  top: 0;
`;
const NavigationContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 795px;
  margin-right: 39px;
  text-decoration: none;
`;
const LinkContainer = styled(Link)`
  text-decoration: none;
`;
const Title = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${(props) => (props.selected ? '3px solid #FF6B35' : 'none')};
  font-weight: 500;
  font-size: 14px;
  color: white;
  font-family: 'Montserrat';
  font-weight: 500;
  line-height: 17.07px;
`;

export default Header;
