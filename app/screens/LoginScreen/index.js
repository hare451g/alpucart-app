import React from 'react';
import {StatusBar} from 'react-native';
import {TextField} from 'react-native-material-textfield';

import Button from '../../components/Button';
import AlpucartLogo from '../../images/alpucart-logo.png';

import {
  SafeAreaView,
  ImageContainer,
  Logo,
  TextInputContainer,
  ButtonContainer,
} from './styled';

function LoginScreen({navigation}) {
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
        <TextInputContainer>
          <TextField
            label="Nomor Telepon"
            keyboardType="phone-pad"
            tintColor={'#2eab53'}
          />
        </TextInputContainer>

        <ButtonContainer>
          <Button onPress={() => navigateTo('OTPScreen')}> Login </Button>
        </ButtonContainer>
      </SafeAreaView>
    </>
  );
}

LoginScreen.navigationOptions = () => ({
  title: 'Login Akun',
});

export default LoginScreen;
