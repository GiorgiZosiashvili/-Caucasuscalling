import Instagram from 'assets/images/instagram.png';
import Location from 'assets/images/location.png';
import Mail from 'assets/images/mail.png';
import Partner from 'assets/images/partner.png';
import Phone from 'assets/images/phone.png';
import Twitter from 'assets/images/tweeter.png';
import Visa from 'assets/images/visa.png';
import Youtube from 'assets/images/youtube.png';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { pagesData } from '../../data/data';
import { Logo } from '../SVG/Svgs';
import CustomText from './Text';

const Info = () => {
  const items = [
    {
      image: Twitter,
      link: '',
    },
    {
      image: Instagram,
      link: '',
    },
    {
      image: Youtube,
      link: '',
    },
  ];
  const contacts = [
    {
      icon: Location,
      text: '0102, Marjanishvili 16, Tbilisi',
    },
    {
      icon: Mail,
      text: 'Caucasuscalling@gmail.com',
    },
    {
      icon: Phone,
    },
  ];
  const help = [
    {
      name: 'Terms of Use',
      page: '',
    },
    {
      name: 'Privacy Policy',
      page: '',
    },
    {
      name: 'Terms of Use',
      page: '',
    },
  ];

  return (
    <InfoContainer>
      <Div>
        <MainLogo />
        <CustomText
          style={{ width: 320 }}
          textAlign="left"
          fontSize="16px"
          fontWeight="500"
          lineHeight="25.6px"
          margin="0px 0px 26px"
          color="#666666">
          We believe in making every journey a story to tell. Real experiences, genuine connections,
          and a world of possibilities
        </CustomText>
        <IconsContainer>
          {items.map((item, index) => {
            return <Icon key={index} src={item.image} />;
          })}
        </IconsContainer>
      </Div>
      <ContactsContainer>
        <CustomText fontSize="16px" fontWeight="700" color="#6F6F70" margin="0px 0px 20px">
          Contact Us
        </CustomText>
        {contacts.map((contact, index) => {
          return (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 20,
              }}
              key={index}>
              <Image src={contact?.icon} />
              {index !== 2 ? (
                <CustomText fontSize="16px" fontWeight="500" lineHeight="26px" color="#666666">
                  {contact?.text}
                </CustomText>
              ) : (
                <PhoneNumber>
                  <CustomText
                    fontSize="16px"
                    fontWeight="500"
                    lineHeight="26px"
                    margin="0px 0px 5px"
                    color="#0077B6">
                    +995 557 999 199
                  </CustomText>
                  <CustomText
                    fontSize="16px"
                    fontWeight="500"
                    lineHeight="26px"
                    margin="0px 0px 0px"
                    color="#0077B6">
                    +995 574 820 102
                  </CustomText>
                </PhoneNumber>
              )}
            </div>
          );
        })}
      </ContactsContainer>
      <NavigationContainer>
        <CustomText fontSize="16px" fontWeight="700" margin="0px 0px 20px" color="#6F6F70">
          Links
        </CustomText>
        {pagesData.map((navigation, i) => {
          return (
            <LinkContainer key={i} to={navigation.page}>
              <CustomText fontSize="14px" fontWeight="500" margin="0px 0px 10px" color="#666666">
                {navigation.name}
              </CustomText>
            </LinkContainer>
          );
        })}
      </NavigationContainer>
      <HelpContainer>
        <CustomText fontSize="16px" fontWeight="700" color="#6F6F70" margin="0px 0px 20px">
          Help
        </CustomText>
        {help.map((help, i) => {
          return (
            <LinkContainer key={i} to={help.page}>
              <CustomText fontSize="14px" fontWeight="500" margin="0px 0px 10px" color="#666666">
                {help.name}
              </CustomText>
            </LinkContainer>
          );
        })}
      </HelpContainer>
    </InfoContainer>
  );
};
const Partners = () => {
  const partnersImages = [
    {
      image: Partner,
    },
    {
      image: Partner,
    },
    {
      image: Partner,
    },
  ];
  const paymentMethods = [
    { image: Visa },
    { image: Visa },
    { image: Visa },
    { image: Visa },
    { image: Visa },
    { image: Visa },
    { image: Visa },
  ];
  return (
    <PartnersContainer>
      <PartnersImageContainer>
        {partnersImages.map((partner, index) => {
          return <PartnersImage key={index} src={partner.image} />;
        })}
      </PartnersImageContainer>
      <PaymentMethodContainer>
        {paymentMethods.map((payment, index) => {
          {
            console.log(paymentMethods.length);
          }
          return (
            <PaymentImage
              style={{ marginRight: paymentMethods.length - 1 !== index && 26 }}
              key={index}
              src={payment.image}
            />
          );
        })}
      </PaymentMethodContainer>
    </PartnersContainer>
  );
};
const Footer = () => {
  return (
    <Container>
      <CustomText
        fontSize="14px"
        fontWeight="400"
        margin="0px 0px 25px"
        color="#666666"
        style={{
          position: 'absolute',
          bottom: 0,
          letterSpacing: 1,
          width: '100%',
        }}>
        Caucasuscalling © 2023 All Right Reserved
      </CustomText>
      <Info />
      <Partners />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 40px;
  background-color: #f7f8fc;
  position: relative;
  align-items: center;
`;
const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  justify-content: space-between;
`;
const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 184px;
`;

const NavigationContainer = styled.ul`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;
const LinkContainer = styled(Link)`
  text-decoration: none;
`;
const HelpContainer = styled.div``;

const IconsContainer = styled.div`
  display: flex;
`;
const PhoneNumber = styled.div`
  display: flex;
  flex-direction: column;
`;
const Icon = styled.img`
  margin-right: 12px;
  width: 40px;
  height: 40px;
  object-fit: fill;
`;
const MainLogo = styled(Logo)`
  margin-bottom: 25px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  object-fit: fill;
`;

const PartnersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  max-width: 1400px;
  margin: 56px 0px 0px;
`;
const PartnersImageContainer = styled.div`
  display: flex;
`;
const PartnersImage = styled.img`
  max-width: 108px;
  max-height: 100px;
  object-fit: fill;
  margin-right: 10px;
`;
const PaymentMethodContainer = styled.div`
  display: flex;
`;
const PaymentImage = styled.img``;

export default Footer;
