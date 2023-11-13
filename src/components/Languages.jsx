import { useState } from 'react';
import styled from 'styled-components';

import arrow_down from '../assets/images/arrow-down.png';
import arrow_up from '../assets/images/arrow_up.png';
import geIcon from '../assets/images/ge.png';
import ruIcon from '../assets/images/ru.png';
import usIcon from '../assets/images/us.png';
import zhIcon from '../assets/images/zh.png';

const languages = [
  {
    name: 'Georgian',
    icon: geIcon,
  },
  {
    name: 'English',
    icon: usIcon,
  },
  { name: 'Russian', icon: ruIcon },
  {
    name: 'Chinese',
    icon: zhIcon,
  },
];

const Languages = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(languages[0]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  console.log(isOpen);
  return (
    <Container>
      <DropdownContainer>
        <DropdownButton onClick={() => setIsOpen(!isOpen)}>
          <LanguageIcon src={selectedOption.icon} alt={`${selectedOption.name} icon`} />
          {selectedOption.name}
          <Arrow src={isOpen ? arrow_up : arrow_down} />
        </DropdownButton>
        <DropdownList isOpen={isOpen}>
          {languages.map((option) => (
            <DropdownItem key={option.name} onClick={() => handleSelect(option)}>
              <LanguageIcon src={option.icon} alt={`${option.name} icon`} />
              {option.name}
            </DropdownItem>
          ))}
        </DropdownList>
      </DropdownContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: right;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  align-self: last baseline;
  margin-right: 40px;
  align-self: center;
  width: 200px;
  padding: 20px 30px;
`;

const DropdownButton = styled.button`
  color: #383737;
  border: none;
  letter-spacing: 1.8px;
  line-height: 21px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  flex: 1;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Montserrat, sans-serif;
`;
const Arrow = styled.img`
  object-fit: contain;
  width: 24px;
  height: 24px;
`;
const DropdownList = styled.ul`
  position: absolute;
  background-color: white;
  top: 100%;
  left: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  width: 200px;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.3);
`;

const DropdownItem = styled.li`
  color: #383737;
  letter-spacing: 1.8px;
  font-family: Montserrat, sans-serif;
  cursor: pointer;
  font-size: 14px;
  padding: 20px 30px;
`;

const LanguageIcon = styled.img`
  width: 28px;
  height: 18px;
  margin-right: 10px;
  object-fit: cover;
`;

export default Languages;