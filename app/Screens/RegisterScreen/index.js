import React from 'react';
import {StatusBar} from 'react-native';
import {TextField} from 'react-native-material-textfield';

import Button from '../../components/Button';
import Typography from '../../components/Typography';
import AlpucartLogo from '../../images/alpucart-logo.png';

import {
  SafeAreaView,
  ImageContainer,
  Logo,
  TextInputContainer,
  ButtonContainer,
} from './styled';

function RegisterScreen(props) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ImageContainer>
          <Logo source={AlpucartLogo} />
        </ImageContainer>
        <TextInputContainer>
          <TextField
            label="Nama Lengkap"
            keyboardType="default"
            tintColor={'#2eab53'}
          />
        </TextInputContainer>
        <TextInputContainer>
          <TextField
            label="Nomor Telepon"
            keyboardType="phone-pad"
            tintColor={'#2eab53'}
          />
        </TextInputContainer>

        <ButtonContainer>
          <Button> Registrasi Akun </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Typography style={{fontSize: 14}} isCenter>
            Sudah punya akun ?
          </Typography>
          <Button isNaked> Login Disini </Button>
        </ButtonContainer>
      </SafeAreaView>
    </>
  );
}

RegisterScreen.navigationOptions = () => ({
  title: 'Registrasi Akun',
});

export default RegisterScreen;
