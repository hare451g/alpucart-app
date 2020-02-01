import React, {useEffect} from 'react';
import {Image, StatusBar} from 'react-native';

import AlpucartLogo from '../../images/alpucart-logo.png';

import {SafeAreaView, ImageContainer} from './styled';

function SplashScreen({navigation}) {
  const SPLASH_SCREEN_TIMEOUT = 3000;
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, SPLASH_SCREEN_TIMEOUT);
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ImageContainer>
          <Image source={AlpucartLogo} />
        </ImageContainer>
      </SafeAreaView>
    </>
  );
}

SplashScreen.navigationOptions = () => ({
  headerShown: false,
});

export default SplashScreen;
