import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';

import ProductListItem from '../../components/ProductListItem';

import {productListMock} from './product.mock';
import ProductModal from '../../components/ProductModal';

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
      <View
        style={{
          alignItems: 'stretch',
          justifyContent: 'center',
        }}
      >
        <FlatList
          data={productList}
          renderItem={({item: product}) => (
            <View
              style={{
                flex: 1,
                padding: 8,
              }}
            >
              <ProductListItem
                {...product}
                onPress={() => onSelectProduct(product)}
              />
            </View>
          )}
          numColumns={2}
          keyExtractor={(item, index) => item.id}
        />
        <ProductModal
          {...selectedProduct}
          onAddQuantity={onAddQuantity}
          onRemoveQuantity={onRemoveQuantity}
          onAddToCardPress={onAddToCardPress}
          onPaymentPress={onPaymentPress}
          isModalVisible={isModalVisible}
          toggleModal={toggleModal}
        />
      </View>
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
