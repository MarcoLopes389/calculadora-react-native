import React from 'react'
import {
    Text,
    View,
    Dimensions
} from 'react-native'

const { height, width } = Dimensions.get("window")

export default (props) => {
    return (
        <View style={{padding: height>700 ? 45 : 20}}>
            <Text style={{fontSize: 20, color: 'white'}}>
                {props.resultado}
            </Text>
        </View>
    )
}