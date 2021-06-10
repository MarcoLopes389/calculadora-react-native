import React, { useState } from 'react'

import Teclado from './teclado'
import Resultado from './resultado'
import { View, StyleSheet, TouchableHighlight, Image, ScrollView, StatusBar, Text, Dimensions } from 'react-native'

const { height, width } = Dimensions.get("window")

export default ({navigation}) => {

    const [resultado, setResultado] = useState('')
    const [conta, setConta] = useState('')

    return (
        <View style={estilos.container}>
            <StatusBar hidden={true}/>
            <ScrollView>
            <TouchableHighlight
                style={{width: 60, height: 60}}
                onPress={() => {
                    navigation.openDrawer()
                }}
            >
                <Image style={estilos.imagem} source={require('../assets/menu4.png')}/>
            </TouchableHighlight>
            <Resultado resultado={resultado}/>
            <Teclado funcoes={{ setConta, setResultado, conta }} resultado={resultado}/>
            {/*<Text>Altura: {height} - Largura: {width}</Text>*/}
            </ScrollView>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    imagem: {
        width: 60,
        height: 60,
        resizeMode: 'stretch',
    },
    algo: {
        resizeMode: 'stretch'
    }
  })