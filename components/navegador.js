import React from 'react'
import {
    StyleSheet
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Content from './contentDrawer'

const Guias = createDrawerNavigator()

import Calculadora from './calculadora'
import CalcSci from './calculadoraSci'

export default () => {
    return(
        <NavigationContainer>
          <Guias.Navigator
            initialRouteName='Padrão'
            drawerContent={(props) => <Content {...props}/>}
          >
            <Guias.Screen name='Padrão' component={Calculadora} />
            <Guias.Screen name='Científica' component={CalcSci} />
          </Guias.Navigator>
        </NavigationContainer>
      )
}