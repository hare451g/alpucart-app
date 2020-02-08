import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';

function HomeScreen() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text>Alpucart</Text>
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
