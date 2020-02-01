import React, {useEffect} from 'react';
import {SafeAreaView, Image, View, StatusBar} from 'react-native';

import AlpucartLogo from '../../images/alpucart-logo.png';

function SplashScreen(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('HomeScreen');
    }, 3000);
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={AlpucartLogo} />
        </View>
      </SafeAreaView>
    </>
  );
}

SplashScreen.navigationOptions = () => ({
  headerShown: false,
});

export default SplashScreen;
