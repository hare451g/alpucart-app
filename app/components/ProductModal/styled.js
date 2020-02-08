import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const ModalContainer = styled.View`
  height: 469px;
  background-color: #fff;
  border-radius: 8px;
  margin: ${(Dimensions.get('window').height - 469) / 2}px 16px;
`;

const ModalContent = styled.View`
  margin: 16px;
`;

const ModalHeader = styled.TouchableHighlight`
  padding: 4px 8px;
  display: flex;
  align-self: flex-end;
`;

const ProductInfoContainer = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
`;

const ProductInfo = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  max-width: 240px;
  padding: 8px 16px;
`;

const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 8px;
`;

const BoldLabel = styled.Text`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
`;

const RedLabel = styled.Text`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  color: #e80e0e;
  margin-top: 16px;
`;

const ProductDescriptions = styled.Text`
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
  color: #000;
`;

const SeparateSection = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 8px 0px;
`;

const CounterButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: #2eab53;
  border-radius: 8px;

  ${props =>
    props.isAdd
      ? `
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  `
      : `
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
  `}
`;

const CounterLabel = styled.View`
  width: 30px;
  height: 30px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ProductInfoContainer,
  ProductImage,
  ProductInfo,
  BoldLabel,
  RedLabel,
  ProductDescriptions,
  SeparateSection,
  CounterButton,
  CounterLabel,
};
