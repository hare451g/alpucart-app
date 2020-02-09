import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import ProductListItem from '../../components/ProductListItem';
import ProductModal from '../../components/ProductModal';

import {productListMock} from './product.mock';
import {ListContainer, ListItemWrapper} from './styled';

function ProductListContainer(props) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productList, setProductList] = useState([]);
  const [isFetchingProduct, setFetchingProduct] = useState(false);
  const [isModalVisible, setModalVisibility] = useState(false);

  useEffect(() => {
    const mockFetchProduct = () => {
      setFetchingProduct(true);
      setTimeout(() => {
        setProductList(productListMock);
        setFetchingProduct(false);
      }, 1000);
    };
    mockFetchProduct();
  }, []);

  const onSelectProduct = product => {
    setSelectedProduct(product);
    toggleModal();
  };

  const toggleModal = () => {
    setModalVisibility(!isModalVisible);
  };

  const onAddQuantity = productId => {};

  const onRemoveQuantity = productId => {};

  const onAddToCardPress = () => {};

  const onPaymentPress = () => {};

  if (isFetchingProduct) {
    return (
      <View>
        <Text>Fetching products . . . </Text>
      </View>
    );
  }

  if (productList && productList.length > 0) {
    return (
      <>
        <ListContainer>
          {productList.map((product, index) => (
            <ListItemWrapper>
              <ProductListItem
                {...product}
                onPress={() => onSelectProduct(product)}
                index={index}
                key={`product-${product.id}`}
              />
            </ListItemWrapper>
          ))}
        </ListContainer>
        <ProductModal
          {...selectedProduct}
          onAddQuantity={onAddQuantity}
          onRemoveQuantity={onRemoveQuantity}
          onAddToCardPress={onAddToCardPress}
          onPaymentPress={onPaymentPress}
          isModalVisible={isModalVisible}
          toggleModal={toggleModal}
        />
      </>
    );
  } else {
    return (
      <View>
        <Text>Product is empty! </Text>
      </View>
    );
  }
}

export default ProductListContainer;
