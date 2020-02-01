import React from 'react';
import {StatusBar, ScrollView, View, Image, Text} from 'react-native';

import AlpucartLogo from '../../images/alpucart-logo.png';

import {
  SafeAreaView,
  Button,
  ImageContainer,
  Logo,
  WelcomeContainer,
  WelcomeTitle,
  WelcomeMessage,
  ButtonContainer,
  ButtonLabel,
} from './styled';

function LandingScreen(props) {
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
          <Button>
            <ButtonLabel>Registrasi</ButtonLabel>
          </Button>
          <Button>
            <ButtonLabel>Login</ButtonLabel>
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
