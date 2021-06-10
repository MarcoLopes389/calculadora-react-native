import React from 'react'
import {
    View,
    StyleSheet,
    TouchableHighlight,
    Image
} from 'react-native'

import Resultado from './resultado'

export default ({navigation}) => {
    return (
        <View style={estilos.container}>
            <TouchableHighlight
                style={{width: 60, height: 60}}
                onPress={() => {
                    navigation.openDrawer()
                }}
            >
                <Image style={estilos.imagem} source={require('../assets/menu4.png')}/>
            </TouchableHighlight>
            <Resultado/>
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