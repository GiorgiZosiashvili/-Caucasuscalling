import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import CustomText from '../../components/reusable/Text';
import { destinationsData } from '../../data/data';

const DestinationDetailsPage = () => {
  const { title } = useParams();
  const chosenDestination = destinationsData.find((destination) => destination.title === title);

  return (
    <Container>
      <Image src={chosenDestination.image} />
      <CustomText
        color="black"
        fontSize="20px"
        fontWeight="700"
        margin="20px 40px 20px"
        textAlign="left">
        {chosenDestination.title}
      </CustomText>
      <CustomText
        color="black"
        fontSize="20px"
        fontWeight="700"
        margin="0px 40px 100px"
        textAlign="left">
        {chosenDestination.description}
      </CustomText>
    </Container>
  );
};

export default DestinationDetailsPage;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Image = styled.img`
  width: 50%;
  max-height: 500px;
  object-fit: cover;
`;
