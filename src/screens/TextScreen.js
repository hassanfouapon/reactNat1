import React, {useState} from "react";
import {Text,View, Buttun, StyleSheet,TextInput} from "react-native";


const TextScren=()=>{

    const [name, setName]= useState('');
    

    return (<View>

        <Text>Enter your Name</Text>
        <TextInput style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={newValue => setName(newValue)}
        
        />
        <Text>Your name is {name}</Text>

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

export default TextScren


