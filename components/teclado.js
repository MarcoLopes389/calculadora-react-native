import React from 'react'
import {
    TouchableHighlight,
    Text,
    View,
    StyleSheet,
    SafeAreaView
} from 'react-native'

export default function Teclado(props) {

    const { setConta, setResultado, conta, visor, setVisor } = props.funcoes
    const resultado = props.resultado

    return (
      <SafeAreaView style={{height: '70%', flexDirection: 'row'}}>
        <View style={estilos.linha}>
            <TouchableHighlight
             style={estilos.botao}
             onPress={() => {
                 if(conta != ''){
                     setConta(String(conta).substr(0, conta.length - 1))
                     setResultado(String(resultado).substr(0, resultado.length - 1))
                 }
             }}
            >
                <Text style={estilos.texto}>
                    C
                </Text>
            </TouchableHighlight>
            <TouchableHighlight
             style={estilos.botao}
             onPress={() => {
                setConta(conta + '1')
                setResultado(resultado + '1')
             }}
            >
                <Text style={estilos.texto}>
                    1
                </Text>
            </TouchableHighlight>
            <TouchableHighlight
             style={estilos.botao}
             onPress={() => {
                setConta(conta + '4')
                setResultado(resultado + '4')
             }}
             >
                <Text style={estilos.texto}>
                    4
                </Text>
            </TouchableHighlight>
            <TouchableHighlight
             style={estilos.botao}
             onPress={() => {
                setConta(conta + '7')
                setResultado(resultado + '7')
             }}
             >
                <Text style={estilos.texto}>7</Text>
            </TouchableHighlight>
            <TouchableHighlight
             style={estilos.botao}
             onPress={() => {
                setConta(conta + '.')
                setResultado(resultado + '.')
             }}
             >
                <Text style={estilos.texto}>
                    .
                </Text>
            </TouchableHighlight>
        </View>
        <View style={estilos.linha}>
            <TouchableHighlight
             style={estilos.botao}
             onPress={() => {
                setConta('')
                setResultado('')
            }}
            >
                <Text style={estilos.texto}>
                    AC
                </Text>
            </TouchableHighlight>
            <TouchableHighlight
             style={estilos.botao}
             onPress={() => {
                setConta(conta + '2')
                setResultado(resultado + '2')
             }}
             >
                <Text style={estilos.texto}>
                    2
                </Text>
            </TouchableHighlight>
            <TouchableHighlight
             style={estilos.botao}
             onPress={() => {
                setConta(conta + '5')
                setResultado(resultado + '5')
             }}
             >
                <Text style={estilos.texto}>
                    5
                </Text>
            </TouchableHighlight>
            <TouchableHighlight
             style={estilos.botao}
             onPress={() => {
                setConta(conta + '8')
                setResultado(resultado + '8')
             }}
             >
                <Text style={estilos.texto}>
                    8
                </Text>
            </TouchableHighlight>
            <TouchableHighlight
             style={estilos.botao}
             onPress={() => {
                if(conta != '0'){
                    setConta(conta + '0')
                    setResultado(resultado + '0')
                }
             }}
             >
                <Text style={estilos.texto}>
                    0
                </Text>
            </TouchableHighlight>
        </View>
        <View style={estilos.linha}>
            <TouchableHighlight
             style={estilos.botao}
             onPress={()=>{
                const tnum = conta.substr(conta.length -2, conta.length)
                const num = conta.substr(conta.length -1, conta.length)
                let res
                
                if(typeof Number(tnum) == 'number'){
                    res = String(tnum/100)
                    setConta(conta.substr(0, conta.length -2) + res)
                    setResultado(resultado.substr(0, resultado.length -2) + res)
                } else {
                    res = String(num/100)
                    setConta(conta.substr(0, conta.length -1) + res)
                    setResultado(resultado.substr(0, resultado.length -1) + res)
                }
             }}
             >
                <Text style={estilos.texto}>
                    %
                </Text>
            </TouchableHighlight>
            <TouchableHighlight
             style={estilos.botao}
             onPress={() => {
                setConta(conta + '3')
                setResultado(resultado + '3')
             }}
            >
                <Text style={estilos.texto}>
                    3
                </Text>
            </TouchableHighlight>
            <TouchableHighlight
             style={estilos.botao}
             onPress={() => {
                setConta(conta + '6')
                setResultado(resultado + '6')
             }}
             >
                <Text style={estilos.texto}>
                    6
                </Text>
            </TouchableHighlight>
            <TouchableHighlight
             style={estilos.botao}
             onPress={() => {
                setConta(conta + '9')
                setResultado(resultado + '9')
             }}
             >
                <Text style={estilos.texto}>
                    9
                </Text>
            </TouchableHighlight>
            <TouchableHighlight
             style={estilos.botao}
             onPress={() => {
                try {
                    const res = eval(conta)
                    setResultado(res)
                    setConta(res)
                } catch {
                    setResultado('')
                    setConta('')
                }
             }}
             >
                <Text style={estilos.texto}>
                    =
                </Text>
            </TouchableHighlight>
        </View>
        <View style={estilos.linha}>
            <TouchableHighlight
             style={estilos.botao}
             onPress={() => {
                 setConta('(' + conta + ')')
                 setResultado('(' + resultado + ')')
             }}
             >
                <Text style={estilos.texto}>
                    ( )
                </Text>
            </TouchableHighlight>
            <TouchableHighlight
             style={estilos.botao}
             onPress={() => {
                setConta(conta + '*')
                setResultado(resultado + 'x')
             }}
             >
                <Text style={estilos.texto}>
                    X
                </Text>
            </TouchableHighlight>
            <TouchableHighlight
             style={estilos.botao}
             onPress={() => {
                setConta(conta + '+')
                setResultado(resultado + '+')
             }}
             >
                <Text style={estilos.texto}>
                    +
                </Text>
            </TouchableHighlight>
            <TouchableHighlight
             style={estilos.botao}
             onPress={() => {
                setConta(conta + '/')
                setResultado(resultado + '/')
             }}
             >
                <Text style={estilos.texto}>/</Text>
            </TouchableHighlight>
            <TouchableHighlight
             style={estilos.botao}
             onPress={() => {
                setConta(conta + '-')
                setResultado(resultado + '-')
             }}
             >
                <Text style={estilos.texto}>
                    -
                </Text>
            </TouchableHighlight>
        </View>
      </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    linha: {
        flexDirection: 'column'
    },
    botao: {
        backgroundColor: 'gray',
        padding: 34.5,
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2
    },
    botaoAC: {
        backgroundColor: 'gray',
        padding: 25,
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2
    },
    texto: {
        fontSize: 20,
        color: 'yellow'
    }
})