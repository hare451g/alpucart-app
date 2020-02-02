import styled from 'styled-components/native';

const Typography = styled.Text`
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: normal;
  ${props => props.isCenter && `text-align: center`}
`;

export default Typography;
