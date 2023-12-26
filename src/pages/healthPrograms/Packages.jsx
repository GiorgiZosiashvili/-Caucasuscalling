import { useState } from 'react';
import { styled } from 'styled-components';

import CustomText from '../../components/reusable/Text';
import { healthPrograms } from '../../data/data';

const Packages = () => {
  const [active, setActive] = useState(1);
  return (
    <Container>
      <ButtonsContainer>
        {healthPrograms.map((programs) => {
          return (
            <Button
              key={programs.id}
              style={{ backgroundColor: programs.id === active && '#FF6B35' }}
              onClick={() => {
                setActive(programs.id);
              }}>
              <CustomText
                textAlign="center"
                fontSize="18px"
                fontWeight="700"
                color={programs.id === active ? '#fff' : '#141515'}>
                {programs.title}
              </CustomText>
            </Button>
          );
        })}
      </ButtonsContainer>
      {healthPrograms.map((item, i) =>
        item.id === active ? (
          <Div key={i}>
            <CustomText
              textAlign="left"
              fontSize="18px"
              fontWeight="700"
              color="#007A33"
              margin="55px 0px 32px">
              {item.text}
            </CustomText>
            <InfoContainer key={item.id}>
              <Ul>
                {item.programs.map((program, i) => {
                  return (
                    <Li key={i}>
                      <CustomText
                        style={{ letterSpacing: 2 }}
                        textAlign="left"
                        fontSize="18px"
                        fontWeight="500"
                        color="#000000"
                        lineHeight="40px">
                        • {program.program}
                      </CustomText>
                    </Li>
                  );
                })}
              </Ul>
              <PackagesContainer>
                {item.packages.map((item, i) => {
                  return (
                    <PackagesBody key={i}>
                      <CustomText
                        textAlign="left"
                        fontSize="18px"
                        fontWeight="500"
                        color="#000000"
                        lineHeight="40px">
                        {item.title}
                      </CustomText>
                      <TourPackages target="_blank" href={item.link_en}>
                        <CustomText
                          textAlign="left"
                          fontSize="18px"
                          fontWeight="500"
                          color="#696868"
                          lineHeight="30px">
                          Check our Packages
                        </CustomText>
                        <Icon src={item.iconUs} />
                      </TourPackages>
                      <TourPackages target="_blank" href={item.link_ru}>
                        <CustomText
                          textAlign="left"
                          fontSize="18px"
                          fontWeight="500"
                          color="#696868"
                          lineHeight="30px">
                          Check our Packages
                        </CustomText>
                        <Icon src={item.iconRu} />
                      </TourPackages>
                    </PackagesBody>
                  );
                })}
              </PackagesContainer>
            </InfoContainer>
            <CustomText
              style={{ letterSpacing: 1.5 }}
              textAlign="left"
              fontSize="18px"
              fontWeight="500"
              color="#000000"
              lineHeight="30px"
              margin="50px 0px 0px">
              {item.description}
            </CustomText>
          </Div>
        ) : null,
      )}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: column;
  margin: 103px 0px 162px;
  flex-wrap: wrap;
  max-width: 1190px;
  padding: 0px 40px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  transition: all 0.3s;
`;
const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  min-height: 80px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #f2f2f2;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 10px;
  flex: 1;
  padding: 5px;
  min-height: 80px;
  transition: all 0.3s;
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 480px;
`;
const Li = styled.li`
  width: 100%;
`;
const PackagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 50px;
  margin: 10px 10px;
`;
const PackagesBody = styled.div`
  display: flex;
  flex-direction: column;
`;
const TourPackages = styled.a`
  display: flex;
  background-color: #f2f2f2;
  align-items: center;
  justify-content: space-evenly;
  max-width: 301px;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.21);
  cursor: pointer;
  margin-bottom: 19px;
  min-width: 280px;
`;
const Icon = styled.img`
  width: 29px;
  height: 18px;
  object-fit: cover;
`;

export default Packages;
