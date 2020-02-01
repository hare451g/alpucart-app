import styled from 'styled-components/native';
import {SafeAreaView as BaseSafeAreaView, View, Image} from 'react-native';

const SafeAreaView = styled(BaseSafeAreaView)`
  background-color: #fff;
  height: 100%;
`;

const ImageContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Logo = styled(Image)`
  height: 52px;
  width: 155px;
`;

export {SafeAreaView, ImageContainer, Logo};
