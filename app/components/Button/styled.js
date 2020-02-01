import styled from 'styled-components/native';
import {TouchableOpacity, View, Text} from 'react-native';

const Container = styled(TouchableOpacity)`
  padding: 8px 16px;
  border-radius: 8px;
  min-height: 42px;
  min-width: 120px;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  border: solid 1px #2eab53;
  background-color: ${props => (props.isOutline ? '#fff' : '#2eab53')};
`;

const Label = styled(Text)`
  color: ${props => (props.isOutline ? '#2eab53' : '#fff')};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;

export {Container, Label};
