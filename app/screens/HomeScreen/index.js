import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import HighlightBanner from '../../components/HighlightBanner';

function HomeScreen() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>Alpucart</Text>
            <HighlightBanner
              highlightText="Order apapun lebih mudah hanya dengan foto daftar belanja"
              buttonText="Upload Daftar Belanja"
              image="https://source.unsplash.com/random/328x100"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

HomeScreen.navigationOptions = () => ({
  headerShown: false,
});

export default HomeScreen;
