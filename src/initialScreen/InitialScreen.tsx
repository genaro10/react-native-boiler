import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

const InitialScreen = () => {
  const [users, setUsers] = useState(true);

  const getUsers = async () => {
    const apiCall = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const usersAux = await apiCall.json();
    setUsers(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const goToLogin = () => {
    return 30
  }

  return (
    <View>
      {users ? (
        <Text testID="cargando">Iniciar la screen</Text>
      ) : (
        <Text testID="texto">Iniciar la screen</Text>
      )}
      <Button onPress={goToLogin} testID="button" title="inicia" />
    </View>
  );
};

export default InitialScreen;
