import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Teclado from './components/teclado'
import Resultado from './components/resultado'

export default function App() {

  const [resultado, setResultado] = useState(0)
  const [conta, setConta] = useState('')
  const [visor, setVisor] = useState('')
  
  return (
    <SafeAreaView style={estilos.container}>
        <Resultado resultado={resultado}/>
        <Teclado funcoes={{setConta, setResultado, setVisor, visor, conta}} resultado={resultado}/>
   </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
})
