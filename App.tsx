import {View, Text} from 'react-native';
import React from 'react';
import Config from 'react-native-config';

const App = () => {
  return (
    <View>
      <Text style={{marginTop: 100}}>
        {Config.API} -- Este es mi ultimo build para probar
      </Text>
    </View>
  );
};

export default App;
