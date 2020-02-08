import React from 'react';
import {
  TouchableContainer,
  Background,
  TextContainer,
  CategoryLabel,
} from './styled';

function CategoryCard({
  name = null,
  image = null,
  onPress = () => {},
  isSelected = false,
}) {
  const opacity = isSelected ? 0.2 : 0.5;

  return (
    <TouchableContainer onPress={onPress} isSelected={isSelected}>
      <Background source={{uri: image}} imageStyle={{borderRadius: 8, opacity}}>
        <TextContainer>
          <CategoryLabel isSelected={isSelected}>{name}</CategoryLabel>
        </TextContainer>
      </Background>
    </TouchableContainer>
  );
}

export default CategoryCard;
