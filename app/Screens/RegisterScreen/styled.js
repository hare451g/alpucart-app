import styled from 'styled-components/native';
import {SafeAreaView as BaseSafeAreaView} from 'react-native';

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
  margin: 4px 16px;
  min-height: 42px;
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
  ButtonContainer,
};
