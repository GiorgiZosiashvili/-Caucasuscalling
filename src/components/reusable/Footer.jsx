/* eslint-disable react/jsx-no-target-blank */
import Amex from 'assets/images/Icons/Amex.png';
import ApplePay from 'assets/images/Icons/ApplePay.png';
import Cash from 'assets/images/Icons/Cash.png';
import GooglePay from 'assets/images/Icons/GooglePay.png';
import Instagram from 'assets/images/Icons/instagram.png';
import Location from 'assets/images/Icons/location.png';
import Mail from 'assets/images/Icons/mail.png';
import MasterCard from 'assets/images/Icons/MasterCard.png';
import Phone from 'assets/images/Icons/phone.png';
import Twitter from 'assets/images/Icons/tweeter.png';
import Visa from 'assets/images/Icons/visa.png';
import Youtube from 'assets/images/Icons/youtube.png';
import Partner from 'assets/images/partner.png';
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
      link: 'https://www.google.com/maps/search/Marjanishvili+16,+Tbilisi/@41.7090723,44.79549,19.78z?entry=ttu',
    },
    {
      icon: Mail,
      text: 'Caucasuscalling@gmail.com',
      link: 'https://mail.google.com/mail/u/0/#search/Caucasuscalling%40gmail.com?compose=new',
    },
    {
      icon: Phone,
    },
  ];
  const help = [
    {
      name: 'Terms of Use',
      link: 'https://drive.google.com/file/d/1WnSOx6KHT1Ks9CDzoLAcdikZtZATheJU/view',
    },
    {
      link: 'https://drive.google.com/file/d/1UKFWtNAOBhbfQRmTGW8aptdWdOv0LHTL/view?usp=share_link',
      name: 'Privacy Policy',
    },
  ];

  return (
    <InfoContainer>
      <Div>
        <MainLogo />
        <CustomText
          style={{ maxWidth: 320 }}
          textAlign="left"
          fontSize="16px"
          fontWeight="500"
          lineHeight="25.6px"
          margin="0px 0px 26px"
          color="#666666">
          Join forces for exceptional tourism partnerships. Our crafted experiences redefine
          collaboration, guaranteeing mutual success. Connect with Caucasus Calling and elevate your
          venture.
        </CustomText>
        <IconsContainer>
          {items?.map((item, index) => {
            return <Icon key={index} src={item.image} />;
          })}
        </IconsContainer>
      </Div>
      <ContactsContainer>
        <CustomText fontSize="16px" fontWeight="700" color="#6F6F70">
          Contact Us
        </CustomText>
        {contacts?.map((contact, index) => {
          return (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
              key={index}>
              <Image src={contact?.icon} />
              {index !== 2 ? (
                <a target="_blank" href={contact.link}>
                  <CustomText fontSize="16px" fontWeight="500" lineHeight="26px" color="#0077B6">
                    {contact?.text}
                  </CustomText>
                </a>
              ) : (
                <PhoneNumber>
                  <CustomText fontSize="16px" fontWeight="500" lineHeight="26px" color="#0077B6">
                    +995 557 999 199
                  </CustomText>
                  <CustomText fontSize="16px" fontWeight="500" lineHeight="26px" color="#0077B6">
                    +995 574 820 102
                  </CustomText>
                </PhoneNumber>
              )}
            </div>
          );
        })}
      </ContactsContainer>
      <NavigationContainer>
        <CustomText fontSize="16px" fontWeight="700" color="#6F6F70">
          Links
        </CustomText>
        {pagesData?.map((navigation, i) => {
          return (
            <LinkContainer key={i} to={navigation.page}>
              <CustomText fontSize="14px" fontWeight="500" color="#666666">
                {navigation.name}
              </CustomText>
            </LinkContainer>
          );
        })}
      </NavigationContainer>
      <HelpContainer>
        <CustomText fontSize="16px" fontWeight="700" color="#6F6F70">
          Help
        </CustomText>
        {help?.map((help, i) => {
          return (
            <HelpLinkContainer key={i} target="_blank" href={help.link}>
              <CustomText fontSize="14px" fontWeight="500" color="#666666">
                {help.name}
              </CustomText>
            </HelpLinkContainer>
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
    { image: MasterCard },
    { image: Amex },
    { image: GooglePay },
    { image: ApplePay },
    { image: Cash },
  ];
  return (
    <PartnersContainer>
      <PartnersImageContainer>
        {partnersImages?.map((partner, index) => {
          return <PartnersImage key={index} src={partner.image} />;
        })}
      </PartnersImageContainer>
      <PaymentMethodContainer>
        {paymentMethods?.map((payment, index) => {
          return <PaymentImage key={index} src={payment.image} />;
        })}
      </PaymentMethodContainer>
    </PartnersContainer>
  );
};
const Footer = () => {
  return (
    <Container>
      <Info />
      <Partners />
      <CustomText
        fontSize="14px"
        fontWeight="400"
        margin="0px 0px 25px"
        color="#666666"
        style={{
          bottom: 0,
          letterSpacing: 1,
          width: '100%',
        }}>
        Caucasuscalling © 2023 All Right Reserved
      </CustomText>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 40px 0px;
  background-color: #f7f8fc;
  position: relative;
  align-items: center;
`;
const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-height: 190px;
  gap: 20px;
  margin-bottom: 50px;
`;

const NavigationContainer = styled.ul`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  gap: 20px;
  margin-bottom: 50px;
`;
const LinkContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;
const HelpLinkContainer = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

const HelpContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const IconsContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;
const PhoneNumber = styled.div`
  display: flex;
  flex-direction: column;
`;
const Icon = styled.img`
  margin-right: 12px;
  width: 40px;
  height: 40px;
  object-fit: cover;
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
  object-fit: cover;
`;

const PartnersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  max-width: 1400px;
`;
const PartnersImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 50px;
`;
const PartnersImage = styled.img`
  object-fit: cover;
`;
const PaymentMethodContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 50px;
`;
const PaymentImage = styled.img`
  width: 50px;
  height: 33px;
  object-fit: cover;
`;

export default Footer;
