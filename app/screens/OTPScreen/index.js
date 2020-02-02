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

function OTPScreen(props) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ImageContainer>
          <Logo source={AlpucartLogo} />
        </ImageContainer>
        <TextInputContainer>
          <TextField
            label="Kode OTP"
            keyboardType="phone-pad"
            tintColor={'#2eab53'}
          />
        </TextInputContainer>

        <ButtonContainer>
          <Button> Verifikasi </Button>
        </ButtonContainer>
      </SafeAreaView>
    </>
  );
}

OTPScreen.navigationOptions = () => ({
  title: 'Kode Verifikasi',
});

export default OTPScreen;
