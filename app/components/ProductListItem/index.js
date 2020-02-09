import React from 'react';
import {View} from 'react-native';

import {
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductButton,
  ProductButtonLabel,
} from './styled';

function ProductListItem({
  image = '',
  name = '',
  price = '',
  onPress = () => {},
  index = 0,
}) {
  return (
    <ProductContainer isEven={index % 2 == 0}>
      <View>
        <ProductImage source={{uri: image}} />
      </View>
      <View>
        <ProductName>{name}</ProductName>
      </View>
      <View>
        <ProductPrice>Rp. {price}</ProductPrice>
      </View>

      <View>
        <ProductButton onPress={onPress}>
          <ProductButtonLabel>Beli</ProductButtonLabel>
        </ProductButton>
      </View>
    </ProductContainer>
  );
}

export default ProductListItem;
