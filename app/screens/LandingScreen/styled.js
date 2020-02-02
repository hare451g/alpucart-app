import styled from 'styled-components/native';
import {
  SafeAreaView as BaseSafeAreaView,
  View,
  Text,
  Image,
} from 'react-native';

import Typography from '../../components/Typography';

const SafeAreaView = styled(BaseSafeAreaView)`
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  background-color: #ffffff;
  height: 100%;
`;

const ImageContainer = styled(View)`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

const Logo = styled(Image)`
  height: 52px;
  width: 155px;
`;

const WelcomeContainer = styled(View)`
  flex: 1;
  justify-content: center;
`;

const WelcomeTitle = styled(Typography)`
  padding: 4px 16px;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #2eab53;
`;

const WelcomeMessage = styled(Typography)`
  padding: 0 16px;
  line-height: 21px;
  text-align: center;
  font-style: normal;
  font-size: 14px;
  color: #2eab53;
`;

const ButtonContainer = styled(View)`
  flex: 2;
  padding: 8px 16px;
`;

export {
  SafeAreaView,
  ImageContainer,
  Logo,
  WelcomeContainer,
  WelcomeTitle,
  WelcomeMessage,
  ButtonContainer,
};
