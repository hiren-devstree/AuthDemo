import React, { Component } from 'react'
import { View } from 'react-native'
import AppNavigator from 'src/navigations/AppNavigator';
import MainContainer from 'src/containers/MainContainer';
import { Provider } from 'react-redux';
import Store from 'src/redux/store'
import * as Font from 'expo-font'
import { FIREBASE_CONFIGS } from 'src/helper/constant'
// import * as firebase from 'firebase';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    }
  }
  componentDidMount = async () => {
    // await firebase.initializeApp(FIREBASE_CONFIGS);
    await Font.loadAsync({
      "Comfortaa-Light": require('./src/assets/fonts/Comfortaa-Light.ttf'),
      "Comfortaa-Regular": require('./src/assets/fonts/Comfortaa-Regular.ttf'),
      "Comfortaa-Medium": require('./src/assets/fonts/Comfortaa-Medium.ttf'),
      "Comfortaa-SemiBold": require('./src/assets/fonts/Comfortaa-SemiBold.ttf'),
      "Comfortaa-Bold": require('./src/assets/fonts/Comfortaa-Bold.ttf')
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      this.state.fontLoaded ?
        <Provider store={Store}>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
              <AppNavigator />
            </View>
            <MainContainer />
          </View>
        </Provider> : <View />

    );
  }
}
