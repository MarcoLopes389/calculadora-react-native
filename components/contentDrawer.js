import React from 'react'
import { DrawerItemList } from '@react-navigation/drawer'
import { StyleSheet, Text, View } from 'react-native'

export default (props) => {
    return (
        <View>
            <Text style={estilos.titulo}>
                Calculadoras
            </Text>
            <DrawerItemList {...props}>
            </DrawerItemList>
        </View>
    )
}

const estilos = StyleSheet.create({
    titulo: {
        margin: 20,
        fontSize: 20
    }
})