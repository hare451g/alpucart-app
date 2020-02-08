import React from 'react';
import {SafeAreaView, ScrollView, View, StatusBar, Image} from 'react-native';

import HighlightBanner from '../../components/HighlightBanner';
import ProductModal from '../../components/ProductModal';

function HomeScreen() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{backgroundColor: '#fff'}}
        >
          <View style={{margin: 16}}>
            <HighlightBanner
              highlightText="Order apapun lebih mudah hanya dengan foto daftar belanja"
              buttonText="Upload Daftar Belanja"
              image="https://source.unsplash.com/random/328x100"
            />
            <ProductModal />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

HomeScreen.navigationOptions = () => ({
  headerTitle: () => (
    <Image
      source={require('../../images/alpucart-logo.png')}
      style={{
        width: 90,
        height: 30.43,
        alignSelf: 'flex-start',
      }}
    />
  ),
});

export default HomeScreen;
