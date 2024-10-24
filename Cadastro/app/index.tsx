import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Configurações do Firebase (substitua pelos seus valores)
const firebaseConfig = {
  apiKey: "AIzaSyB8tvsJwk6_rxc62j5DoubZqxqyhwS7tZc",
  authDomain: "cadast-7c6f4.firebaseapp.com",
  projectId: "cadast-7c6f4",
  storageBucket: "cadast-7c6f4.appspot.com",
  messagingSenderId: "773949128559",
  appId: "1:773949128559:web:6c0a9447005a078528329a",
  measurementId: "G-TK1N1C2RV2"
};

// Inicialize o Firebase antes de qualquer uso
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  const sendData = async () => {
    const nomesCollection = firebase.firestore().collection('Nomes');
    try {
      await nomesCollection.add({
        Nome: nome,
        Sobrenome: sobrenome
      });
      Alert.alert('Sucesso', 'Dados cadastrados com sucesso!');
      setNome('');
      setSobrenome('');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao cadastrar os dados.');
    }
  };
  
  return (
    <View>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Sobrenome"        
        value={sobrenome}
        onChangeText={setSobrenome}
      />
      <Button title="Cadastrar" onPress={sendData} />
    </View>
  );
};

export default App;