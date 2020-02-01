import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, Image, View, Text, StatusBar} from 'react-native';

import AlpucartLogo from '../../images/alpucart-logo';

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
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={AlpucartLogo} />
        </View>
      </SafeAreaView>
    </>
  );
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
