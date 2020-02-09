import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const ProductContainer = styled.View`
  width: ${(Dimensions.get('window').width - 24) / 2}px;
  height: 224px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  ${props => (props.isEven ? `margin-right: 8px` : `margin-left: 8px`)};
`;

const ProductImage = styled.Image`
  height: 105px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const ProductName = styled.Text`
  height: 54px;
  padding: 8px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
`;

const ProductPrice = styled.Text`
  padding: 2px 8px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #e80e0e;
`;

const ProductButton = styled.TouchableOpacity`
  margin: 8px;
  padding: 4px;
  background: #2eab53;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const ProductButtonLabel = styled.Text`
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #ffffff;
`;

export {
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductButton,
  ProductButtonLabel,
};
