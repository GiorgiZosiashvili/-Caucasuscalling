import styled from 'styled-components';

const CustomText = styled.h4`
  font-size: ${(props) => props.fontSize || '16px'};
  font-family: ${(props) => props.fontfamily || 'Montserrat, sans-serif'};
  color: ${(props) => props.color || 'white'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  text-align: ${(props) => props.textAlign || 'center'};
  margin: ${(props) => props.margin || '0'};
  line-height: ${(props) => props.lineHeight || '1.5'};
`;

export default CustomText;
