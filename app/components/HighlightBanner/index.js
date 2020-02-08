import React from 'react';
import {
  TouchableContainer,
  Background,
  TextContainer,
  HighlightText,
  ButtonText,
} from './styled';

function HighlightBanner({
  highlightText = null,
  buttonText = null,
  image = null,
  onPress = () => {},
}) {
  const imageStyle = {borderRadius: 8, opacity: 0.85};

  return (
    <TouchableContainer onPress={onPress}>
      <Background source={{uri: image}} imageStyle={imageStyle}>
        <TextContainer>
          <HighlightText>{highlightText}</HighlightText>
          <ButtonText>{buttonText}</ButtonText>
        </TextContainer>
      </Background>
    </TouchableContainer>
  );
}

export default HighlightBanner;
