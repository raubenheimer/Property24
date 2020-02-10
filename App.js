import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Navigator from './routes/authenticationFlow';
import ConfigStore from './store/configStore';
import { Provider } from 'react-redux';
import configureStore from './store/configStore';

const getFonts = () => Font.loadAsync({
  'source-regular': require('./assets/fonts/SourceSansPro-Regular.ttf'),
  'source-bold': require('./assets/fonts/SourceSansPro-Bold.ttf'),
  'source-italic': require('./assets/fonts/SourceSansPro-Italic.ttf')
});

const store = configureStore(() => console.log('done'))

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  

  if (fontsLoaded) {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>

    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }

}

