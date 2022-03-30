import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { useNavigation } from "@react-navigation/native";


export function UserIdentification(){

    const [isFocused, setIsFocused] = useState(false);

    const [isFilled, setIsFilled] = useState(false);

    const [name, setName] =  useState<string>();

    function handleInputBlur(){
       setIsFocused(false);
       // ao sair de fora do campo verifica se tem conteudo la? caso sim puxa ess conteudo e a linha continua verde
       setIsFilled(!!name);
    }

    function handleInputFocus(){
        setIsFocused(true);
    }

    function handleInputChange(value : string){
        //Verifica se contem ou nao conteudo na linha, puxa o nome
        setIsFilled(!!value);
        setName(value);
    }


    type Nav = {
        navigate: (value: string) => void;
    }
      
    const { navigate } = useNavigation<Nav>()



    function handleSubmit(){
       navigate('Confirmation');
    }

    return(
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <View style={styles.form}>
                            <View style={styles.header}>
                                <Text style={styles.emoji}>
                                    { isFilled ? '😄' : '😕'}
                                </Text>
                                <Text style={styles.title}>
                                    Como podemos{'\n'}
                                    chamar você?
                                </Text>
                            </View>
                            <TextInput style={[
                                styles.input,
                                (isFocused || isFilled) && {borderColor: colors.green}
                            ]} 
                            placeholder="Digite nome" 
                            onBlur={handleInputBlur} 
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}/>

                            <View style={styles.footer}>
                                <Button title="Confirmar" onPress={handleSubmit}/>
                            </View>   
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}


const styles= StyleSheet.create({
    container : {
        flex:1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content:{
        flex:1,
        width: '100%'
    },
    form:{
        flex:1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center'
    },
    header:{
        alignItems: 'center'
    },
    emoji:{
        fontSize: 44
    },
    input:{
        borderBottomWidth:1,
        borderColor: colors.gray,
        color: colors.heading,
        width:'100%',
        fontSize: 18,
        marginTop: 50,
        padding:  10,
        textAlign: 'center'
    },
    title:{
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20
    },
    footer:{
        width:'100%',
        marginTop: 40,
        paddingHorizontal: 20
    }
});