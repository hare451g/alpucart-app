import React, {useState} from 'react';
import {StatusBar} from 'react-native';

import AlpucartLogo from '../../images/alpucart-logo.png';

import Button from '../../components/Button';

import {
  SafeAreaView,
  ImageContainer,
  Logo,
  TextInputContainer,
  TextInputLabel,
  TextInput,
  ButtonContainer,
} from './styled';

function RegisterScreen(props) {
  const [isFocused, setFocus] = useState(false);

  const onFocus = e => {
    console.log(e.target);
    setFocus(true);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ImageContainer>
          <Logo source={AlpucartLogo} />
        </ImageContainer>

        <TextInputContainer isFocused={isFocused}>
          <TextInputLabel isFocused={isFocused}>Nama Lengkap</TextInputLabel>
          <TextInput onFocus={onFocus} isFocused={isFocused} />
        </TextInputContainer>

        <ButtonContainer>
          <Button isOutline> Login </Button>
        </ButtonContainer>
      </SafeAreaView>
    </>
  );
}

RegisterScreen.navigationOptions = () => ({
  title: 'Registrasi Akun',
});

export default RegisterScreen;
