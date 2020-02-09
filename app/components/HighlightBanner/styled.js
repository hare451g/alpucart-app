import styled from 'styled-components/native';
import Typography from '../Typography';

const TouchableContainer = styled.TouchableOpacity`
  min-width: 328px;
  min-height: 100px;
  border-radius: 8px;
  background-color: #ffffff;
  background: rgba(46, 171, 83, 0.27);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Background = styled.ImageBackground`
  min-width: 328px;
  min-height: 100px;
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

const HighlightText = styled(Typography)`
  font-size: 12px;
  font-family: 'Montserrat_semi_bold';
  color: #ffffff;
  text-align: center;
  padding: 6px;
  min-width: 224px;
`;

const ButtonText = styled(Typography)`
  font-size: 14px;
  font-family: 'Montserrat_semi_bold';
  color: #ffffff;
  background-color: #030303;
  padding: 6px;
  border-radius: 8px;
`;

export {
  TouchableContainer,
  Background,
  TextContainer,
  HighlightText,
  ButtonText,
};
