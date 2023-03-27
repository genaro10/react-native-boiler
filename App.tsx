import {View, Text} from 'react-native';
import React from 'react';
import Config from 'react-native-config';

const App = () => {
  return (
    <View>
      <Text style={{marginTop: 100}}>AMBIENTE: {Config.API}</Text>
    </View>
  );
};

export default App;
