import React, {useState} from "react";
import {Text,View, Buttun, StyleSheet,TextInput} from "react-native";


const TextScrenOnPassword=()=>{

    const [password, setPassword]= useState('');
    

    return (<View>

        <Text>Enter your password</Text>
        <TextInput style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newValue => setPassword(newValue)}
        
        />
        {password.length<4? <Text>password was be 4 characteres</Text>:null}

    </View>
    );

};

const styles = StyleSheet.create({

    input:{
        margin:15,
        borderColor:'black',
        borderWidth:1
    }

});

export default TextScrenOnPassword


