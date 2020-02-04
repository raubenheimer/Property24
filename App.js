import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Navigator from './routes/authenticationFlow';

const getFonts = () => Font.loadAsync({
    'source-regular': require('./assets/fonts/SourceSansPro-Regular.ttf'),
    'source-bold' : require('./assets/fonts/SourceSansPro-Bold.ttf'),
    'source-italic' : require('./assets/fonts/SourceSansPro-Italic.ttf')
  });

export default function App() {
  const[fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
     <Navigator />
    );
  } else {
    return (
    <AppLoading
      startAsync={getFonts}
      onFinish={()=> setFontsLoaded(true)}
    />
    )
  }
  
}

