import React from 'react'
import {
    Text,
    View
} from 'react-native'

export default (props) => {
    return (
        <View style={{padding: 32}}>
            <Text style={{fontSize: 20, color: 'white'}}>
                {props.resultado}
            </Text>
        </View>
    )
}