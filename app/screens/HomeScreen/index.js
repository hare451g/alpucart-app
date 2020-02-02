import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';

import {startLoading, stopLoading} from '../../store/AppReducer/actions';

function HomeScreen({startLoading, stopLoading, isLoading}) {
  useEffect(() => {
    startLoading();
    setTimeout(() => {
      stopLoading();
    }, 3000);
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            {isLoading ? <Text>Loading...</Text> : <Text>Alpucart</Text>}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  startLoading: () => dispatch(startLoading()),
  stopLoading: () => dispatch(stopLoading()),
});

const mapStateToProps = state => ({
  isLoading: state.app.isLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
