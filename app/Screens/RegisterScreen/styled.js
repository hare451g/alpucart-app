import styled from 'styled-components/native';
import {SafeAreaView as BaseSafeAreaView} from 'react-native';

import Typography from '../../components/Typography';

const SafeAreaView = styled(BaseSafeAreaView)`
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  background-color: #ffffff;
  height: 100%;
`;

const ImageContainer = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.Image`
  height: 52px;
  width: 155px;
`;

const TextInputContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #333333;
  margin: 0px 16px;
  min-height: 42px;
  justify-content: center;
`;

const TextInputLabel = styled(Typography)`
  padding: 0px 8px;
  font-weight: 400;
  font-size: 14px;
`;

const TextInput = styled.TextInput`
  padding: 0px 8px;
  height: 0px;
  font-size: 14px;
  background-color: red;
  font-family: 'Montserrat';
`;

const ButtonContainer = styled.View`
  flex: 2;
  padding: 8px 16px;
`;

export {
  SafeAreaView,
  ImageContainer,
  Logo,
  TextInputContainer,
  TextInputLabel,
  TextInput,
  ButtonContainer,
};
