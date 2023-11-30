/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { pagesData } from '../../data/data';

function Header({ page, backgroundColor }) {
  const [currentPage, setCurrentPage] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    setCurrentPage(page);
  }, [page]);
  console.log(isMenuOpen);
  return (
    <Container
      style={{ backgroundColor: backgroundColor ? backgroundColor : 'rgba(0, 0, 0, 0.15)' }}>
      <NavigationContainer>
        {pagesData.map((navigation, i) => {
          const isSelected = currentPage === navigation.page;
          return (
            <LinkContainer style={{ textDecoration: 'none' }} key={i} to={navigation.page}>
              <Title selected={isSelected}>{navigation.name}</Title>
            </LinkContainer>
          );
        })}
      </NavigationContainer>
      <BurgerMenu onClick={toggleMenu}>
        <Bar />
        <Bar />
        <Bar />
        {isMenuOpen ? (
          <Menu>
            {pagesData.map((navigation, i) => {
              const isSelected = currentPage === navigation.page;
              return (
                <LinkContainer
                  style={{
                    textDecoration: 'none',
                    flexDirection: 'column',
                  }}
                  key={i}
                  to={navigation.page}>
                  <Title selected={isSelected}>{navigation.name}</Title>
                </LinkContainer>
              );
            })}
          </Menu>
        ) : null}
      </BurgerMenu>
    </Container>
  );
}
const Container = styled.header`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  height: 80px;
  text-decoration: none;
  z-index: 10;
  position: absolute;
  top: 0;
`;
const NavigationContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;
  max-width: 800px;
  text-decoration: none;
  margin-right: 40px;
  @media screen and (max-width: 885px) {
    display: none;
  }
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
  @media screen and (max-width: 1000px) {
    background-color: ${(props) => (props.selected ? '#FF6B35' : 'none')};
    border-bottom: ${(props) => props.selected && 'none'};
    height: 49px;
  }
`;

const BurgerMenu = styled.div`
  display: none;
  position: relative;
  cursor: pointer;
  margin-right: 20px;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: -20px;
  top: 53.5px;
  z-index: 10;
  flex-direction: column;
  width: 182px;
  background-color: #346172;
`;
const Bar = styled.div`
  width: 30px;
  height: 3px;
  background-color: white;
  margin: 3px 0;
`;
export default Header;
