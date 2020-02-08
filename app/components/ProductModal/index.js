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
  BoldLabel,
  RedLabel,
  ProductDescriptions,
  SeparateSection,
  CounterButton,
  CounterLabel,
} from './styled';
import Button from '../Button';

function ProductModal({
  image = '',
  name = '',
  price = 0,
  quantity = 0,
  descriptions = '',
  onAddQuantity = () => {},
  onRemoveQuantity = () => {},
  onAddToCardPress = () => {},
  onPaymentPress = () => {},
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
                <BoldLabel>{name}</BoldLabel>
                <RedLabel>Rp. {price}</RedLabel>
              </ProductInfo>
            </ProductInfoContainer>
            <ProductDescriptions>{descriptions}</ProductDescriptions>
            <SeparateSection>
              <BoldLabel>Jumlah Beli</BoldLabel>
              <SeparateSection>
                <CounterButton onPress={onAddQuantity}>
                  <Icon name="md-remove" color="#fff" size={20} />
                </CounterButton>
                <CounterLabel>
                  <Text>{quantity}</Text>
                </CounterLabel>
                <CounterButton onPress={onRemoveQuantity} isAdd>
                  <Icon name="md-add" color="#fff" size={20} />
                </CounterButton>
              </SeparateSection>
            </SeparateSection>
            <SeparateSection>
              <BoldLabel>Total Bayar</BoldLabel>
              <RedLabel>Rp. {price * quantity}</RedLabel>
            </SeparateSection>
            <SeparateSection>
              <Button
                onPress={onAddToCardPress}
                style={{width: '45%'}}
                isOutline
              >
                Add to Cart
              </Button>
              <Button onPress={onPaymentPress} style={{width: '45%'}}>
                Bayar
              </Button>
            </SeparateSection>
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
