import styled from 'styled-components/native';
import Typography from '../Typography';

const TouchableContainer = styled.TouchableOpacity`
  width: 110px;
  height: 45px;
  border-radius: 8px;
  background-color: #ffffff;
  ${props => props.isSelected && `background-color: #2eab53;`}
`;

const Background = styled.ImageBackground`
  width: 110px;
  height: 45px;
  border-radius: 8px;
`;

const TextContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

const CategoryLabel = styled(Typography)`
  font-size: 14px;
  font-family: 'Montserrat_semi_bold';
  color: #ffffff;
`;

export {TouchableContainer, Background, TextContainer, CategoryLabel};
