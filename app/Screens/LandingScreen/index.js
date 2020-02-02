import React from 'react';
import {StatusBar, ScrollView, View, Image, Text} from 'react-native';

import AlpucartLogo from '../../images/alpucart-logo.png';

import Button from '../../components/Button';

import {
  SafeAreaView,
  ImageContainer,
  Logo,
  WelcomeContainer,
  WelcomeTitle,
  WelcomeMessage,
  ButtonContainer,
} from './styled';

function LandingScreen({navigation}) {
  const navigateTo = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ImageContainer>
          <Logo source={AlpucartLogo} />
        </ImageContainer>
        <WelcomeContainer>
          <WelcomeTitle>Selamat Datang</WelcomeTitle>
          <WelcomeMessage>
            Belanja kebutuhan Restaurant, Kedai, & apapun mudah & murah
          </WelcomeMessage>
        </WelcomeContainer>
        <ButtonContainer>
          <Button onPress={() => navigateTo('RegisterScreen')}>
            Registrasi
          </Button>
          <Button onPress={() => navigateTo('LoginScreen')} isOutline>
            Login
          </Button>
        </ButtonContainer>
      </SafeAreaView>
    </>
  );
}

LandingScreen.navigationOptions = () => ({
  headerShown: false,
});

export default LandingScreen;
