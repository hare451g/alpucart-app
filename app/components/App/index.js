import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
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

export default App;
