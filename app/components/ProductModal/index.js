import React, {useState} from 'react';
import {Modal, Text, TouchableHighlight, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ProductInfoContainer,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
} from './styled';

function ProductModal({
  image = 'https://source.unsplash.com/random/100x100',
  name = 'Cabai Merah Super cap Jali Jali (/kg)',
  price = 35000,
  descriptions = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, diam facilisi tristique laoreet auctor elementum. Massa, diam facilisi tristique laoreet auctor elementum.  consectetur adipiscing elit.',
}) {
  const [isModalVisible, setModalVisibility] = useState(false);

  const toggleModal = () => {
    setModalVisibility(!isModalVisible);
  };

  return (
    <View style={{marginTop: 22}}>
      <Modal animationType="slide" visible={isModalVisible} transparent>
        <ModalContainer>
          <ModalContent>
            <ModalHeader onPress={toggleModal}>
              <Icon name="md-close" size={24} />
            </ModalHeader>
            <ProductInfoContainer>
              <ProductImage source={{uri: image}} />
              <ProductInfo>
                <ProductName>{name}</ProductName>
                <ProductPrice>Rp. {price}</ProductPrice>
              </ProductInfo>
            </ProductInfoContainer>
          </ModalContent>
        </ModalContainer>
      </Modal>

      <TouchableHighlight onPress={toggleModal}>
        <Text>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
}

export default ProductModal;
