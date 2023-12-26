import styled from 'styled-components';

import Mail from '../assets/images/mail.png';
import Phone from '../assets/images/phone.png';
import GoogleTranslate from './reusable/GoogleTranslate';
import CustomText from './reusable/Text';

const Contacts = () => {
  const contactsData = [
    {
      icon: Phone,
      text: ['+995 557 999 199 ', '  ', ' +995 574 820 102'],
    },
    {
      icon: Mail,
      text: ['Caucasuscalling@gmail.com'],
    },
  ];
  return (
    <ContactsContainer>
      <FakeView />
      {contactsData?.map((contacts, index) => {
        return (
          <Body key={index}>
            <Icon src={contacts.icon} />
            <TextContainer>
              <CustomText fontSize="14px" color="#0077B6" lineHeight="17px">
                {contacts.text}
              </CustomText>
            </TextContainer>
          </Body>
        );
      })}
      <FakeView style={{ width: 145 }} />
    </ContactsContainer>
  );
};

const Languages = () => {
  return (
    <Container>
      <Contacts />
      <GoogleTranslate />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 60px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: center;
  justify-content: right;

  z-index: 100;
  @media screen and (max-width: 885px) {
    align-items: start;
    padding-right: 0px;
  }
`;
const ContactsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  gap: 16px;
  padding: 0px 40px;
  @media screen and (max-width: 1009px) {
    display: none;
  }
`;
const FakeView = styled.div`
  display: flex;
  width: 236px;
  height: 60px;
  z-index: -1;
`;
const Body = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
`;

export default Languages;
